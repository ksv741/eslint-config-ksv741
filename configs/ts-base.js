import jsBaseConfig from './js-base.js';
import eslintTsBaseConfig from '../rules/.eslint-ts.js';
import styleTsConfig from '../rules/style/.eslint-style-ts.js';

export default [
  ...jsBaseConfig,
  eslintTsBaseConfig,
  styleTsConfig,
];
