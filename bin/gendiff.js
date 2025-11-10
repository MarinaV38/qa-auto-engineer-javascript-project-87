#!/usr/bin/env node

const { program } = require('commander');
const { version } = require('../package.json');

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version(version)
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>');

program.parse();
