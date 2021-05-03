import { Arguments } from "yargs";
import { parser } from "./parsers";

describe("remote", () => {
  test("add", async () => {
    const argv = parser.parse(
      "remote add foo bar",
      (err: Error, argv: Arguments<any>, output: string) => {
        console.log(JSON.stringify(argv));
        if (err) {
          console.log("ERROR\n" + err);
        }
        if (output) {
          console.log("OUTPUT\n" + output);
        }
      },
    );
    expect(argv.name).toEqual("foo");
    expect(argv.url).toEqual("bar");
  });
});
