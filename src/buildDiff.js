const buildDiff = (data1, data2) => {
  const uniqueKeys = Array.from(new Set([...Object.keys(data1), ...Object.keys(data2)]))
  const sortedKeys = uniqueKeys.sort()

  return sortedKeys.map((key) => {
    const value1 = data1[key]
    const value2 = data2[key]

    if (!Object.hasOwn(data2, key)) {
      return { key, type: 'removed', value: value1 }
    }

    if (!Object.hasOwn(data1, key)) {
      return { key, type: 'added', value: value2 }
    }

    if (value1 === value2) {
      return { key, type: 'unchanged', value: value1 }
    }

    return {
      key,
      type: 'updated',
      value1,
      value2,
    }
  })
}

module.exports = buildDiff
