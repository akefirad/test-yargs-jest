import { parser } from "./parsers";
import { Arguments } from "yargs";

parser.parse("remote add foo", (err: Error, argv: Arguments<any>, output: string) => {
  console.log("parsed argv: %s", JSON.stringify(argv));
  if (err) {
    console.log("ERROR\n" + err);
  }
  if (output) {
    console.log("OUTPUT\n" + output);
  }
});
