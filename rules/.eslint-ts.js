import tsEslint from 'typescript-eslint';

import jsBaseConfig from './.eslint-js.js';
import importConfig from './.eslint-import.js';

const { rules: baseRules } = jsBaseConfig;
const { rules: importsRules, settings: importSettings } = importConfig;

export default {
  name: 'ts-base',
  plugins: {
    '@typescript-eslint': tsEslint.plugin,
  },
  languageOptions: {
    parser: tsEslint.parser,
    parserOptions: {
      projectService: true,
      project: 'tsconfig.json',
    },
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.d.ts', '.tsx'],
    },
    'import/resolver': {
      ...importSettings['import/resolver'],
      node: {
        ...importSettings['import/resolver'].node,
        extensions: [
          ...importSettings['import/resolver'].node.extensions,
          '.ts',
          '.d.ts',
          '.tsx',
        ],
      },
      typescript: {
        alwaysTryTypes: true,
        project: process.cwd(),
      },
    },
    'import/extensions': [...importSettings['import/extensions'], '.ts', '.d.ts', '.tsx'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  rules: {
    'constructor-super': 'off',
    'getter-return': 'off',
    'no-const-assign': 'off',
    'no-dupe-args': 'off',
    'no-dupe-keys': 'off',
    'no-func-assign': 'off',
    'no-import-assign': 'off',
    'no-obj-calls': 'off',
    'no-setter-return': 'off',
    'no-this-before-super': 'off',
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-unsafe-negation': 'off',

    camelcase: 'off',
    '@typescript-eslint/naming-convention': ['error',
      {
        selector: 'enum',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      }],

    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': baseRules['default-param-last'],

    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': baseRules['dot-notation'],

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': baseRules['no-array-constructor'],

    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': baseRules['no-dupe-class-members'],

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': baseRules['no-empty-function'],

    'no-implied-eval': 'off',
    'no-new-func': 'off',
    '@typescript-eslint/no-implied-eval': baseRules['no-implied-eval'],

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': baseRules['no-loop-func'],

    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': baseRules['no-magic-numbers'],

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': baseRules['no-redeclare'],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': baseRules['no-shadow'],

    'no-throw-literal': 'off',
    '@typescript-eslint/only-throw-error': baseRules['no-throw-literal'], // TODO

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': baseRules['no-unused-expressions'],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': baseRules['no-unused-vars'],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': baseRules['no-use-before-define'],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': baseRules['no-useless-constructor'],

    'require-await': 'off',
    '@typescript-eslint/require-await': baseRules['require-await'],

    'consistent-return': 'off',
    '@typescript-eslint/consistent-return': baseRules['consistent-return'],

    '@typescript-eslint/return-await': ['error', 'in-try-catch'],

    'import/extensions': [
      importsRules['import/extensions'][0],
      importsRules['import/extensions'][1],
      {
        ...importsRules['import/extensions'][2],
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      importsRules['import/no-extraneous-dependencies'][0],
      {
        ...importsRules['import/no-extraneous-dependencies'][1],
        devDependencies: importsRules[
          'import/no-extraneous-dependencies'
        ][1].devDependencies.reduce((result, devDep) => {
          const toAppend = [devDep];
          const devDepWithTs = devDep.replace(/\bjs(x?)\b/g, 'ts$1');
          if (devDepWithTs !== devDep) {
            toAppend.push(devDepWithTs);
          }

          return [...result, ...toAppend];
        }, []),
      },
    ],

    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/no-restricted-types': 'error',
    '@typescript-eslint/no-unsafe-function-type': 'error',
    '@typescript-eslint/no-wrapper-object-types': 'error',
    '@typescript-eslint/class-literal-property-style': 'error',

    'class-methods-use-this': 'off',
    '@typescript-eslint/class-methods-use-this': baseRules['class-methods-use-this'],

    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-assertions': ['error', {
      assertionStyle: 'as',
    }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': ['error', {
      prefer: 'type-imports',
    }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': baseRules['init-declarations'],

    'max-params': 'off',
    '@typescript-eslint/max-params': baseRules['max-params'],

    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    '@typescript-eslint/no-array-delete': 'off',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',

    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': baseRules['no-invalid-this'],

    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-mixed-enums': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-require-imports': 'error',

    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': baseRules['no-restricted-imports'],

    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-unsafe-unary-minus': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/no-deprecated': 'error',
    '@typescript-eslint/no-empty-object-type': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/parameter-properties': 'error',
    '@typescript-eslint/prefer-as-const': 'error',

    'prefer-destructuring': 'off',
    '@typescript-eslint/prefer-destructuring': baseRules['prefer-destructuring'],

    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-promise-reject-errors': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-return-this-type': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/typedef': 'error',
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/prefer-find': 'error',
    '@typescript-eslint/no-misused-spread': 'error',
    '@typescript-eslint/no-unnecessary-template-expression': 'error',
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
    '@typescript-eslint/no-unnecessary-type-conversion': 'error',
    '@typescript-eslint/no-unnecessary-type-parameters': 'error',
    '@typescript-eslint/no-unsafe-type-assertion': 'error',
    '@typescript-eslint/related-getter-setter-pairs': 'error',
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
  },
};
