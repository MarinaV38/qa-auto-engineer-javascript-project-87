#!/usr/bin/env node

const { program } = require('commander');
const { version } = require('../package.json');
const genDiff = require('..');

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version(version)
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2, options) => {
    const diff = genDiff(filepath1, filepath2, options.format);
    console.log(diff);
  });

program.parse();
