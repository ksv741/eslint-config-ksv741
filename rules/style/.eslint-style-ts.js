const stylistic = require('@stylistic/eslint-plugin');

module.exports = {
  name: 'style-ts',
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    '@stylistic/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      multilineDetection: 'brackets',
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    }],
    '@stylistic/type-annotation-spacing': ['error', {
      before: false,
      after: true,
      overrides: {
        arrow: {
          before: true,
          after: true,
        },
      },
    }],
    '@stylistic/type-generic-spacing': 'error',
    '@stylistic/type-named-tuple-spacing': 'error',
  },
};
