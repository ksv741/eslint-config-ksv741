module.exports = {
  extends: [
    './js-base',
    './rules/.eslint-ts',
    './rules/style/.eslint-style-ts',
  ].map(require.resolve)
};
