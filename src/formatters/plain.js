const stringify = value => {
  if (value === null) {
    return 'null'
  }

  if (typeof value === 'string') {
    return `'${value}'`
  }

  if (typeof value === 'object') {
    return '[complex value]'
  }

  return String(value)
}

const formatPlain = diffTree => {
  const lines = diffTree.reduce((acc, node) => {
    switch (node.type) {
      case 'removed':
        return [...acc, `Property '${node.key}' was removed`]
      case 'added':
        return [...acc, `Property '${node.key}' was added with value: ${stringify(node.value)}`]
      case 'updated':
        return [
          ...acc,
          `Property '${node.key}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`,
        ]
      case 'unchanged':
        return acc
      default:
        throw new Error(`Unknown node type: ${node.type}`)
    }
  }, [])

  return lines.join('\n')
}

module.exports = formatPlain
