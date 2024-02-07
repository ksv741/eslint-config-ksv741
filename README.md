### Конфиг eslint, который поможет в написании как JavaScript приложений, так и приложений использующих Typescript и React

### Список используемых плагинов:
* [`@stylistic/eslint-plugin`](https://eslint.style/rules) - [Rules](https://eslint.style/rules)
* [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) [Rules](https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules)
* [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) [Rules](https://typescript-eslint.io/rules/)
* [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) [Rules](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules)
* [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) [Rules](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules)
* [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) [Rules](https://legacy.reactjs.org/docs/hooks-rules.html#eslint-plugin)

### Настройка

Для подключения добавьте конфиг в файл конфигурации Eslint

```js
extends: ["ksv741"]
```

либо можете точечно переопределить для каких файлов использовать конкретную часть конфигурации

* `ksv741/js-base` - содержит правила для файлов `JavaScript`
* `ksv741/js-react` - содержит правила для файлов `JavaScript` и правила для `JSX` и `React`
* `ksv741/ts-base` - содержит правила для файлов `JavaScript` и правила для файлов `TypeScript`
* `ksv741/ts-react` - содержит правила для файлов `JavaScript`, `TypeScript`, `JSX` и `React`

```js
overrides: [
    {
      files: ["*.js"],
      extends: ["ksv741/js-base"]
    },
    {
      files: ["*.jsx"],
      extends: ["ksv741/js-react"]
    },
    {
      files: ["*.ts"],
      extends: ["ksv741/ts-base"]
    },
    {
      files: ["*.tsx"],
      extends: ["ksv741/ts-react"]
    }
  ]
```

Для файлов, использующих конфигурацию `ksv741/ts-base` или `ksv741/ts-react` по умолчанию используется [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser) и [`eslint-import-resolver-typescript`](https://www.npmjs.com/package/eslint-import-resolver-typescript).
Но вы можете это переопределить, используя настройки плагина [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#importparsers)  
Например, добавим настройку для использования [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) и [eslint-import-resolver-webpack](https://www.npmjs.com/package/eslint-import-resolver-webpack)

```js
{
  extends: ["ksv741"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      configFile: ".babelrc.js"
    }
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "webpack.config.js"
      }
    }
  }
}
```
