module.exports = {
  extends: [
    './rules/.eslint-js',
    './rules/.eslint-import',
    './rules/style/.eslint-style-js',
  ].map(require.resolve)
};
