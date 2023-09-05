#!/usr/bin/env node

const { program } = require('commander');

program
  .version('1.0.0')
  .description('A diff tool')
  .option('-h, --help', 'display help for command')
  .parse(process.argv);

if (program.help) {
  program.outputHelp();
}