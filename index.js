const jsBase = require('./configs/js-base');
const jsReact = require('./configs/js-react');
const jsTsJest = require('./configs/js-ts-jest');
const tsBase = require('./configs/ts-base');
const tsReact = require('./configs/ts-react');

const jestConfig = jsTsJest.map((config) => ({
  ...config,
  files: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
}));

const jsBaseConfig = jsBase.map((config) => ({
  ...config,
  files: ['**/*.js'],
}));

const tsBaseConfig = tsBase.map((config) => ({
  ...config,
  files: ['**/*.ts'],
}));

const jsReactConfig = jsReact.map((config) => ({
  ...config,
  files: ['**/*.jsx'],
}));

const tsReactConfig = tsReact.map((config) => ({
  ...config,
  files: ['**/*.tsx'],
}));

module.exports = [
  ...jsBaseConfig,
  ...tsBaseConfig,
  ...jsReactConfig,
  ...tsReactConfig,
  ...jestConfig,
];
