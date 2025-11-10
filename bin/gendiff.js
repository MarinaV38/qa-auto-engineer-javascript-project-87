#!/usr/bin/env node

const { program } = require('commander');
const { version } = require('../package.json');

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version(version);

program.parse();
