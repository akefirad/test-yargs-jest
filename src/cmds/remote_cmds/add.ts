import { Argv } from "yargs";

export const command = "add <name> <url>";
export const handler = (yargs: Argv<any>): void => {};
export const describe = "Add remote named <name> for repo at url <url>";
export const builder = (yargs: Argv<any>): Argv => {
  return yargs.demandCommand(0, 0);
};
