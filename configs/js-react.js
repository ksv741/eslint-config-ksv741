import jsBaseConfig from './js-base.js';
import jsxA11yConfig from '../rules/react/.eslint-jsx-a11y.js';
import reactConfig from '../rules/react/.eslint-react.js';
import reactHooksConfig from '../rules/react/.eslint-react-hooks.js';
import styleJsxConfig from '../rules/style/.eslint-style-jsx.js';

export default [
  ...jsBaseConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
  styleJsxConfig,
];
