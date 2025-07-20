import reactHooks from 'eslint-plugin-react-hooks';

export default {
  name: 'react-hooks',
  plugins: {
    'react-hooks': reactHooks,
  },
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
};
