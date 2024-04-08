module.exports = {
  extends: [
    './rules/jest/.eslint-jest',
    './rules/jest/.eslint-jest-dom',
    './rules/jest/.eslint-jest-formatting',
    './rules/jest/.eslint-jest-testing-library',
  ].map(require.resolve)
};
