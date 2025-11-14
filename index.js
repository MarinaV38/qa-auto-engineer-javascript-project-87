const fs = require('fs')
const path = require('path')

const parseData = require('./src/parsers')
const buildDiff = require('./src/buildDiff')
const formatDiff = require('./src/formatters')

const getAbsolutePath = filepath => path.resolve(process.cwd(), filepath)
const readFile = filepath => fs.readFileSync(getAbsolutePath(filepath), 'utf-8')
const getFormat = filepath => path.extname(filepath).slice(1).toLowerCase()

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const fileContent1 = readFile(filepath1)
  const fileContent2 = readFile(filepath2)

  const format1 = getFormat(filepath1)
  const format2 = getFormat(filepath2)

  const data1 = parseData(fileContent1, format1)
  const data2 = parseData(fileContent2, format2)
  const diffTree = buildDiff(data1, data2)

  return formatDiff(diffTree, format)
}

module.exports = genDiff
