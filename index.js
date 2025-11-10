const loadData = require('./src/parsers');

const formatValue = (value) => {
  if (typeof value === 'boolean' || typeof value === 'number' || value === null) {
    return String(value);
  }

  return value;
};

const makeLine = (sign, key, value) => `  ${sign} ${key}: ${formatValue(value)}`;

const buildDiffLines = (data1, data2) => {
  const keys = Array.from(new Set([...Object.keys(data1), ...Object.keys(data2)])).sort();

  return keys.flatMap((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    const hasInFirst = Object.prototype.hasOwnProperty.call(data1, key);
    const hasInSecond = Object.prototype.hasOwnProperty.call(data2, key);

    if (hasInFirst && !hasInSecond) {
      return makeLine('-', key, value1);
    }

    if (!hasInFirst && hasInSecond) {
      return makeLine('+', key, value2);
    }

    if (value1 === value2) {
      return makeLine(' ', key, value1);
    }

    return [makeLine('-', key, value1), makeLine('+', key, value2)];
  });
};

const formatStylish = (data1, data2) => {
  const diffLines = buildDiffLines(data1, data2);
  return `{\n${diffLines.join('\n')}\n}`;
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = loadData(filepath1);
  const data2 = loadData(filepath2);

  if (format !== 'stylish') {
    throw new Error(`Format "${format}" is not supported yet`);
  }

  return formatStylish(data1, data2);
};

module.exports = genDiff;
