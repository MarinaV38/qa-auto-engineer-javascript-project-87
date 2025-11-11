const path = require('path');
const fs = require('fs');

const genDiff = require('..');

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('genDiff', () => {
  const expected = readFixture('expected_stylish.txt').trim();

  test('returns stylish diff for flat json files', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');

    expect(genDiff(filepath1, filepath2)).toBe(expected);
  });

  test('supports explicit stylish format option', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');

    expect(genDiff(filepath1, filepath2, 'stylish')).toBe(expected);
  });

  test('handles yaml files', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yml');

    expect(genDiff(filepath1, filepath2)).toBe(expected);
  });
});
