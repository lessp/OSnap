let close_requests = Queue.create();
let pending_requests = Queue.create();
let sent_requests = Hashtbl.create(10);
let listeners = Hashtbl.create(10);

let events = Hashtbl.create(1000);

let call_event_handlers = (key, message) => {
  List.iter(handler =>
    handler(
      message,
      () => {
        Hashtbl.remove(listeners, key);
        Hashtbl.remove(events, key);
      },
    )
  );
};

let websocket_handler = (u, wsd) => {
  let rec input_loop = wsd => {
    let%lwt () = Lwt.pause();
    if (!Queue.is_empty(close_requests)) {
      Websocketaf.Wsd.close(wsd);
      close_requests |> Queue.iter(resolver => Lwt.wakeup_later(resolver, ()));
      close_requests |> Queue.clear;
      Lwt.return_unit;
    } else if (!Queue.is_empty(pending_requests)) {
      let (key, message, resolver) = Queue.take(pending_requests);
      let payload = Bytes.of_string(message);
      Websocketaf.Wsd.send_bytes(
        wsd,
        ~kind=`Text,
        payload,
        ~off=0,
        ~len=Bytes.length(payload),
      );
      Hashtbl.add(sent_requests, key, resolver);
      input_loop(wsd);
    } else {
      input_loop(wsd);
    };
  };
  Lwt.async(() => input_loop(wsd));

  let handle_response = response => {
    print_endline(response);
    let id =
      response
      |> Yojson.Safe.from_string
      |> Yojson.Safe.Util.member("id")
      |> Yojson.Safe.Util.to_int_option;

    let method =
      response
      |> Yojson.Safe.from_string
      |> Yojson.Safe.Util.member("method")
      |> Yojson.Safe.Util.to_string_option;

    let sessionId =
      response
      |> Yojson.Safe.from_string
      |> Yojson.Safe.Util.member("sessionId")
      |> Yojson.Safe.Util.to_string_option;

    switch (method, sessionId) {
    | (None, None) => ()
    | (None, _) => ()
    | (Some(method), None) =>
      let key = method;
      Hashtbl.add(events, key, response);
      Hashtbl.find_opt(listeners, key)
      |> Option.iter(call_event_handlers(key, response));
    | (Some(method), Some(sessionId)) =>
      let key = method ++ sessionId;
      Hashtbl.add(events, key, response);
      Hashtbl.find_opt(listeners, key)
      |> Option.iter(call_event_handlers(key, response));
    };

    switch (id) {
    | None => ()
    | Some(key) =>
      Hashtbl.find_opt(sent_requests, key)
      |> Option.iter(Lwt.wakeup_later(_, response));
      Hashtbl.remove(sent_requests, key);
    };
  };

  let frame = (~opcode as _, ~is_fin as _, ~len as _, payload) => {
    let rev_payload_chunks = ref([]);

    let on_eof = () => {
      rev_payload_chunks^
      |> List.rev
      |> List.fold_left((acc, chunk) => acc ++ chunk, "")
      |> handle_response;
    };

    let rec on_read = (bs, ~off, ~len) => {
      let current_payload = Bigstringaf.substring(bs, ~off, ~len);
      rev_payload_chunks := [current_payload, ...rev_payload_chunks^];
      payload |> Websocketaf.Payload.schedule_read(~on_eof, ~on_read);
    };

    payload |> Websocketaf.Payload.schedule_read(~on_eof, ~on_read);
  };

  let eof = Lwt.wakeup_later(u);

  Websocketaf.Client_connection.{frame, eof};
};

let error_handler = error => {
  switch (error) {
  | `Exn(_exn) => assert(false)
  | `Handshake_failure(_resp, _body) => assert(false)
  | `Invalid_response_body_length(_resp) => assert(false)
  | `Malformed_response(_string) => assert(false)
  | _ => assert(false)
  };
};

let connect = url => {
  let uri = Uri.of_string(url);
  let port = uri |> Uri.port |> Option.value(~default=0);
  let host = uri |> Uri.host_with_default(~default="");
  let resource = uri |> Uri.path;

  let%lwt addresses =
    Lwt_unix.getaddrinfo(
      host,
      string_of_int(port),
      [Unix.(AI_FAMILY(PF_INET))],
    );
  let socket = Lwt_unix.socket(Unix.PF_INET, Unix.SOCK_STREAM, 0);
  let%lwt () = Lwt_unix.connect(socket, List.hd(addresses).Unix.ai_addr);

  let (p, u) = Lwt.wait();

  let _ =
    socket
    |> Websocketaf_lwt_unix.Client.connect(
         ~nonce="0123456789ABCDEF",
         ~host,
         ~port,
         ~resource,
         ~error_handler,
         ~websocket_handler=websocket_handler(u),
       );
  p;
};

let send = message => {
  let key =
    message
    |> Yojson.Safe.from_string
    |> Yojson.Safe.Util.member("id")
    |> Yojson.Safe.Util.to_int;

  let (p, resolver) = Lwt.wait();
  pending_requests |> Queue.add((key, message, resolver));
  p;
};

let listen = (~event, ~sessionId, handler) => {
  let key = event ++ sessionId;
  let stored_listeners = Hashtbl.find_opt(listeners, key);
  switch (stored_listeners) {
  | None => Hashtbl.add(listeners, key, [handler])
  | Some(stored) => Hashtbl.replace(listeners, key, [handler, ...stored])
  };

  Hashtbl.find_all(events, key)
  |> List.iter(event => {
       handler(
         event,
         () => {
           Hashtbl.remove(listeners, key);
           Hashtbl.remove(events, key);
         },
       )
     });
};

let close = () => {
  let (p, resolver) = Lwt.wait();
  close_requests |> Queue.add(resolver);
  p;
};
