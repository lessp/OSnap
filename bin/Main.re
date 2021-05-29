open Cmdliner;

Printexc.record_backtrace(true);

let print_error = msg => {
  Console.log(<Pastel color=Red> msg </Pastel>);
};

let main = (noCreate, noOnly, noSkip, config_path) => {
  open Lwt_result.Syntax;
  let run = {
    let* t =
      try%lwt(OSnap.setup(~config_path)) {
      | Failure(message) =>
        print_error(message);
        Lwt_result.fail();
      | OSnap_Config.Global.Parse_Error(_) =>
        print_error("Your osnap.config.json is in an invalid format.");
        Lwt_result.fail();
      | OSnap_Config.Global.No_Config_Found =>
        print_error("Unable to find a global config file.");
        print_error(
          "Please create a \"osnap.config.json\" at the root of your project or specifiy the location using the --config option.",
        );
        Lwt_result.fail();
      | OSnap_Config.Test.Duplicate_Tests(tests) =>
        print_error(
          "Found some tests with duplicate names. Every test has to have a unique name.",
        );
        print_error("Please rename the following tests: \n");
        tests |> List.iter(print_error);
        Lwt_result.fail();
      | OSnap_Config.Test.Invalid_format =>
        print_error("Found some tests with an invalid format.");
        Lwt_result.fail();
      | exn => raise(exn)
      };

    let* () =
      try%lwt(OSnap.run(t, ~noCreate, ~noOnly, ~noSkip)) {
      | Failure(message) =>
        print_error(message);
        Lwt_result.fail();
      | exn => raise(exn)
      };

    Lwt_result.return();
  };

  switch (Lwt_main.run(run)) {
  | Ok () => 0
  | Error () => 1
  };
};

let info =
  Term.info(
    "osnap",
    ~version="1.0.0-alpha.4",
    ~man=[
      `S(Manpage.s_description),
      `P(
        "OSnap is a snapshot testing tool, which uses chrome to take screenshots and compares them with a base image taken previously.",
      ),
      `P("If both images are equal, the test passes."),
      `P(
        "If the images aren't equal, the test fails and puts the new image into the \"__updated__\" folder inside of your snapshot folder.
          It also generates a new image, which shows the base image (how it looked before), an image with the differing pixels
          highlighted and the new image side by side.",
      ),
      `P(
        "There is no \"update\" command to update the snapshots. If the changes shown in the diff image are expected,
          you just have to move and replace the image from the \"__updated__\" folder into the \"__base_images__\" folder.",
      ),
    ],
    ~exits=
      Term.[
        exit_info(0, ~doc="on success"),
        exit_info(1, ~doc="on failed test runs"),
        exit_info(124, ~doc="on command line parsing errors."),
        exit_info(125, ~doc="on unexpected internal errors."),
      ],
  );

let config = {
  let doc = "
    The relative path to the global config file.
  ";
  let default = "";
  Arg.(value & opt(file, default) & info(["config"], ~doc));
};

let noCreate = {
  let doc = "
    With this option enabled, new snapshots will not be created, but fail the whole test run instead.
    This option is recommended for ci environments.
  ";
  Arg.(value & flag & info(["no-create"], ~doc));
};

let noOnly = {
  let doc = "
    With this option enabled, the test run will fail, if you have any test with \"only\" set to true.
    This option is recommended for ci environments.
  ";
  Arg.(value & flag & info(["no-only"], ~doc));
};

let noSkip = {
  let doc = "
    With this option enabled, the test run will fail, if you have any test with \"skip\" set to true.
    This option is recommended for ci environments.
  ";
  Arg.(value & flag & info(["no-skip"], ~doc));
};

let cmd = Term.(const(main) $ noCreate $ noOnly $ noSkip $ config);

let () = Term.eval((cmd, info)) |> Term.exit_status;
