const loadData = require('./src/parsers');
const buildDiff = require('./src/buildDiff');
const formatDiff = require('./src/formatters');

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = loadData(filepath1);
  const data2 = loadData(filepath2);
  const diffTree = buildDiff(data1, data2);

  return formatDiff(diffTree, format);
};

module.exports = genDiff;
