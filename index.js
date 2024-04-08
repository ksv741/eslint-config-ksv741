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
    {
      files: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)'
      ],
      extends: [require.resolve('./js-ts-jest')],
    },
  ],
};
