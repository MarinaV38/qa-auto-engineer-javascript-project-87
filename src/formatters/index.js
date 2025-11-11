const formatStylish = require('./stylish')
const formatPlain = require('./plain')
const formatJson = require('./json')

const formattersMap = {
  stylish: formatStylish,
  plain: formatPlain,
  json: formatJson,
}

const formatDiff = (diffTree, formatName = 'stylish') => {
  const formatter = formattersMap[formatName]

  if (!formatter) {
    throw new Error(`Format "${formatName}" is not supported yet`)
  }

  return formatter(diffTree)
}

module.exports = formatDiff
