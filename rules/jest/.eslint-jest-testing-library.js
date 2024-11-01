const testingLibrary = require('eslint-plugin-testing-library');

module.exports = {
  name: 'jest-testing-library',
  ...testingLibrary.configs['flat/react'],
};
