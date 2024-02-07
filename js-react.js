module.exports = {
  extends: [
    './js-base',
    './rules/react/.eslint-jsx-a11y',
    './rules/react/.eslint-react',
    './rules/react/.eslint-react-hooks',
    './rules/style/.eslint-style-jsx',
  ].map(require.resolve),
};
