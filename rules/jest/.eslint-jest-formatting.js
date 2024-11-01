const jestFormatting = require('eslint-plugin-jest-formatting');
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat();
const config = compat.config(jestFormatting.configs.recommended);

module.exports = {
  name: 'jest-formatting',
  ...config.reduce((res, cur) => ({ ...res, ...cur }), {}),
};
