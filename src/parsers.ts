import yargs from "yargs";

export const parser = yargs
  .strict(true)
  .help()
  .commandDir("cmds")
  .demandCommand(1)
  .recommendCommands();
