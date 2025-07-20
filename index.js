import tsReact from './configs/ts-react.js';
import jsBase from './configs/js-base.js';
import jsReact from './configs/js-react.js';
import jsTsJest from './configs/js-ts-jest.js';
import tsBase from './configs/ts-base.js';

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

const config = [
  ...jsBaseConfig,
  ...tsBaseConfig,
  ...jsReactConfig,
  ...tsReactConfig,
  ...jestConfig,
];

export default config;
