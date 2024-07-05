module.exports = {
  plugins: [
    '@stylistic'
  ],
  rules: {
    '@stylistic/jsx-child-element-spacing': 'off',
    '@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
    '@stylistic/jsx-closing-tag-location': 'error',
    '@stylistic/jsx-curly-brace-presence': ['error', {
      'props': 'never',
      'children': 'never',
    }],
    '@stylistic/jsx-curly-newline': ['error', {
      'multiline': 'consistent',
      'singleline': 'consistent',
    }],
    '@stylistic/jsx-curly-spacing': ['error', 'never', {
      'allowMultiline': true,
    }],
    '@stylistic/jsx-equals-spacing': ['error', 'never'],
    '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    '@stylistic/jsx-indent': ['error', 2],
    '@stylistic/jsx-indent-props': ['error', 2],
    '@stylistic/jsx-max-props-per-line': ['error', {
      "maximum": { "single": 3, "multi": 1 }
    }],
    '@stylistic/jsx-newline': ['error', {
      'prevent': false
    }],
    '@stylistic/jsx-one-expression-per-line': ['error', {
      'allow': 'literal',
    }],
    '@stylistic/jsx-props-no-multi-spaces': 'error',
    '@stylistic/jsx-quotes': ['error', "prefer-double"],
    '@stylistic/jsx-self-closing-comp': 'off',
    '@stylistic/jsx-sort-props': ['error', {
      'ignoreCase': true,
      'callbacksLast': true,
      'shorthandFirst': true,
      'shorthandLast': false,
      'noSortAlphabetically': false,
      'reservedFirst': true,
    }],
    '@stylistic/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'never',
    }],
    '@stylistic/jsx-wrap-multilines': ['error', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line',
    }],
    "@stylistic/jsx-function-call-newline": ["error", "multiline"]
  }
}
