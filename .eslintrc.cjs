module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'semi': ['error', 'never'],
    'arrow-parens': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
  },
}
