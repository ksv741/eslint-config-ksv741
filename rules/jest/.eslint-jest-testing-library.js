import testingLibrary from 'eslint-plugin-testing-library';

export default {
  name: 'jest-testing-library',
  ...testingLibrary.configs['flat/react'],
};
