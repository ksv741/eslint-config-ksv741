const jest = require('eslint-plugin-jest');

module.exports = {
  name: 'jest',
  ...jest.configs['flat/recommended'],
};
