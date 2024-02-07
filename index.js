module.exports = {
  overrides: [
    {
      files: ['**/*.js'],
      extends: [require.resolve('./js-base')],
    },
    {
      files: ['**/*.jsx'],
      extends: [require.resolve('./js-react')],
    },
    {
      files: ['**/*.ts'],
      extends: [require.resolve('./ts-base')],
    },
    {
      files: ['**/*.tsx'],
      extends: [require.resolve('./ts-react')],
    },
  ],
};
