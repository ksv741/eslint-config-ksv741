const { rules: reactRules, settings: reactSettings } = require('../rules/react/.eslint-react');

const reactFilenameExtensionRule = reactRules['react/jsx-filename-extension'];

module.exports = [
  ...require('./js-react'),
  ...require('./ts-base'),
  {
    name: 'react-settings',
    settings: {
      'import/resolver': {
        ...reactSettings['import/resolver'],
        node: {
          ...reactSettings['import/resolver'].node,
          extensions: [
            ...reactSettings['import/resolver'].node.extensions,
            '.ts',
            '.tsx',
          ],
        },
      },
      'import/extensions': [
        ...reactSettings['import/extensions'],
        '.ts',
        '.tsx',
      ],
    },
    rules: {
      '@typescript-eslint/class-methods-use-this': reactRules['class-methods-use-this'],
      'import/extensions': [
        reactRules['import/extensions'][0],
        reactRules['import/extensions'][1],
        {
          ...reactRules['import/extensions'][2],
          ts: 'never',
          tsx: 'never',
        },
      ],
      'react/jsx-filename-extension': [reactFilenameExtensionRule[0], {
        ...reactFilenameExtensionRule[1],
        extensions: [
          ...reactFilenameExtensionRule[1].extensions,
          '.ts',
          '.tsx',
        ],
      }],
      'react/require-default-props': 'off',
    },
  },
];
