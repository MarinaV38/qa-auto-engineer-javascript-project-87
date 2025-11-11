const path = require('path')
const fs = require('fs')

const genDiff = require('..')

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename)
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8')

describe('genDiff', () => {
  const expectedStylish = readFixture('expected_stylish.txt').trim()
  const expectedPlain = readFixture('expected_plain.txt').trim()
  const expectedJson = readFixture('expected_json.txt').trim()

  test('returns stylish diff for flat json files', () => {
    const filepath1 = getFixturePath('file1.json')
    const filepath2 = getFixturePath('file2.json')

    expect(genDiff(filepath1, filepath2)).toBe(expectedStylish)
  })

  test('supports explicit stylish format option', () => {
    const filepath1 = getFixturePath('file1.json')
    const filepath2 = getFixturePath('file2.json')

    expect(genDiff(filepath1, filepath2, 'stylish')).toBe(expectedStylish)
  })

  test('handles yaml files', () => {
    const filepath1 = getFixturePath('file1.yml')
    const filepath2 = getFixturePath('file2.yml')

    expect(genDiff(filepath1, filepath2)).toBe(expectedStylish)
    expect(genDiff(filepath1, filepath2, 'plain')).toBe(expectedPlain)
    expect(genDiff(filepath1, filepath2, 'json')).toBe(expectedJson)
  })
})
