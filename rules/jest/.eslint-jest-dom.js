const jestDom = require('eslint-plugin-jest-dom');

module.exports = {
  name: 'jest-dom',
  ...jestDom.configs['flat/recommended'],
};
