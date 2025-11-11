module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb-base',
  rules: {
    'no-console': 'off',
    semi: ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
  },
}
