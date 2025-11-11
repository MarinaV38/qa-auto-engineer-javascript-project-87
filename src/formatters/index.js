const formatStylish = require('./stylish');

const formatDiff = (diffTree, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return formatStylish(diffTree);
    default:
      throw new Error(`Format "${formatName}" is not supported yet`);
  }
};

module.exports = formatDiff;
