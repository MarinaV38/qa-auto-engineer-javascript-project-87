const loadData = require('./src/parsers');

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = loadData(filepath1);
  const data2 = loadData(filepath2);

  // Diff calculation will be implemented in upcoming steps.
  return JSON.stringify({ data1, data2, format });
};

module.exports = genDiff;
