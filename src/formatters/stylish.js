const stringify = (value) => {
  if (value === null) {
    return 'null';
  }

  if (typeof value === 'object') {
    return '[complex value]';
  }

  return String(value);
};

const formatLine = (sign, key, value) => `  ${sign} ${key}: ${stringify(value)}`;

const formatStylish = (diffTree) => {
  const lines = diffTree.flatMap((node) => {
    switch (node.type) {
      case 'removed':
        return formatLine('-', node.key, node.value);
      case 'added':
        return formatLine('+', node.key, node.value);
      case 'unchanged':
        return formatLine(' ', node.key, node.value);
      case 'updated':
        return [
          formatLine('-', node.key, node.value1),
          formatLine('+', node.key, node.value2),
        ];
      default:
        throw new Error(`Unknown node type: ${node.type}`);
    }
  });

  return `{\n${lines.join('\n')}\n}`;
};

module.exports = formatStylish;
