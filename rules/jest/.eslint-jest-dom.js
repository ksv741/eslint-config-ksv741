import jestDom from 'eslint-plugin-jest-dom';

export default {
  name: 'jest-dom',
  ...jestDom.configs['flat/recommended'],
};
