const {rules: reactRules, settings: reactSettings} = require('./rules/react/.eslint-react.js');

const reactFilenameExtensionRule = reactRules['react/jsx-filename-extension'];

module.exports = {
  extends: [
    './js-react',
    './ts-base',
  ].map(require.resolve),
  settings: {
    'import/resolver': {
      ...reactSettings['import/resolver'],
      node: {
        ...reactSettings['import/resolver'].node,
        extensions: [
          ...reactSettings['import/resolver'].node.extensions,
          '.tsx'
        ]
      }
    },
    'import/extensions': [
      ...reactSettings['import/extensions'],
      '.tsx'
    ],
  },
  rules: {
    "@typescript-eslint/class-methods-use-this": reactRules['class-methods-use-this'],
    'import/extensions': [
      reactRules['import/extensions'][0],
      reactRules['import/extensions'][1],
      {
        ...reactRules['import/extensions'][2],
        'tsx': 'never',
      },
    ],
    "react/jsx-filename-extension": [reactFilenameExtensionRule[0], {
      ...reactFilenameExtensionRule[1],
      'extensions': [
        ...reactFilenameExtensionRule[1].extensions,
        '.tsx',
      ],
    }],
    'react/require-default-props': 'off'
  }
};
