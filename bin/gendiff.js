#!/usr/bin/env node

import { readFileSync } from 'node:fs'
import { program } from 'commander'

import genDiff from '../index.js'

const packageJsonPath = new URL('../package.json', import.meta.url)
const { version } = JSON.parse(readFileSync(packageJsonPath, 'utf-8'))

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version(version)
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2, options) => {
    const diff = genDiff(filepath1, filepath2, options.format)
    console.log(diff)
  })

program.parse()
