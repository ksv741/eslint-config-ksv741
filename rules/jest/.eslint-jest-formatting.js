import * as jestFormatting from 'eslint-plugin-jest-formatting';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();
const config = compat.config(jestFormatting.configs.recommended);

export default {
  name: 'jest-formatting',
  ...config.reduce((res, cur) => ({ ...res, ...cur }), {}),
};
