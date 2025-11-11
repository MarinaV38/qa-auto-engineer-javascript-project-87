const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const getAbsolutePath = filepath => path.resolve(process.cwd(), filepath)

const getFormat = filepath => path.extname(filepath).slice(1).toLowerCase()

const parseData = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data)
    case 'yml':
    case 'yaml':
      return yaml.load(data)
    default:
      throw new Error(`Unsupported file format: ${format}`)
  }
}

const loadData = filepath => {
  const absolutePath = getAbsolutePath(filepath)
  const data = fs.readFileSync(absolutePath, 'utf-8')
  const format = getFormat(filepath)

  return parseData(data, format)
}

module.exports = loadData
