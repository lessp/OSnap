exception Invalid_format;
exception Duplicate_Tests(list(string));

type size = (int, int);

type action =
  | Click(string)
  | Type(string, string)
  | Wait(int);

type t = {
  only: bool,
  skip: bool,
  name: string,
  url: string,
  sizes: list(size),
  actions: option(list(action)),
};

let init: OSnap_Config_Global.t => list(t);
