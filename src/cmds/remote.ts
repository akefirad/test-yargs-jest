import { Argv } from "yargs";

export const command = "remote <command>";
export const describe = "Manage set of tracked repos";
export const handler = (yargs: Argv<any>) => {};
export const builder = (yargs: Argv<any>) => {
  return yargs //
    .commandDir("remote_cmds") //
    .demandCommand(1, 1) //
    .recommendCommands();
};
