const formatStylish = require('./stylish');
const formatPlain = require('./plain');

const formattersMap = {
  stylish: formatStylish,
  plain: formatPlain,
};

const formatDiff = (diffTree, formatName = 'stylish') => {
  const formatter = formattersMap[formatName];

  if (!formatter) {
    throw new Error(`Format "${formatName}" is not supported yet`);
  }

  return formatter(diffTree);
};

module.exports = formatDiff;
