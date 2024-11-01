const reactHooks = require('eslint-plugin-react-hooks');

module.exports = {
  name: 'react-hooks',
  plugins: {
    'react-hooks': reactHooks,
  },
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
};
