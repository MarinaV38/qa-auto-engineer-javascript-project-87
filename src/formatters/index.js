import formatStylish from './stylish.js'
import formatPlain from './plain.js'
import formatJson from './json.js'

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

export default formatDiff
