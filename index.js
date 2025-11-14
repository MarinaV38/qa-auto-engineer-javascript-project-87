import fs from 'node:fs'
import path from 'node:path'

import parseData from './src/parsers.js'
import buildDiff from './src/buildDiff.js'
import formatDiff from './src/formatters/index.js'

const getAbsolutePath = filepath => path.resolve(process.cwd(), filepath)
const readFile = filepath => fs.readFileSync(getAbsolutePath(filepath), 'utf-8')
const getFormat = filepath => path.extname(filepath).slice(1).toLowerCase()

const loadData = (filepath) => {
  const fileContent = readFile(filepath)
  const format = getFormat(filepath)

  return parseData(fileContent, format)
}

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = loadData(filepath1)
  const data2 = loadData(filepath2)
  const diffTree = buildDiff(data1, data2)

  return formatDiff(diffTree, format)
}

export default genDiff
