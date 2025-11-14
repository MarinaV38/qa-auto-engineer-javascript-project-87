const yaml = require('js-yaml')

const parsersMap = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
}

const parseData = (data, format) => {
  const parser = parsersMap[format]

  if (!parser) {
    throw new Error(`Unsupported file format: ${format}`)
  }

  return parser(data)
}

module.exports = parseData
