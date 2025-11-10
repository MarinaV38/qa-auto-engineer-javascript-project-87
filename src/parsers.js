const fs = require('fs');
const path = require('path');

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);

const readFile = (filepath) => fs.readFileSync(getAbsolutePath(filepath), 'utf-8');

const parseData = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error(`Unsupported file format: ${format}`);
  }
};

const getFormat = (filepath) => path.extname(filepath).slice(1);

const loadData = (filepath) => {
  const data = readFile(filepath);
  const format = getFormat(filepath);
  return parseData(data, format);
};

module.exports = loadData;
