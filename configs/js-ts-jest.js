import jestConfig from '../rules/jest/.eslint-jest.js';
import jestDomConfig from '../rules/jest/.eslint-jest-dom.js';
import jestFormattingConfig from '../rules/jest/.eslint-jest-formatting.js';
import jestTestingLibraryConfig from '../rules/jest/.eslint-jest-testing-library.js';

export default [
  jestConfig,
  jestDomConfig,
  jestFormattingConfig,
  jestTestingLibraryConfig,
];
