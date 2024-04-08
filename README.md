## eslint-config-ksv741
***
### Конфиг eslint для JavaScript, TypeScript, React, Jest
***
### Содержание
- [`Установка`](#установка)
- [`Использование`](#использование)
- [`Настройка`](#настройка)
- [`Кастомизация`](#кастомизация)
- [`Плагины`](#плагины)
***

### Установка

#### npm

```js
npm install --save-dev eslint-config-ksv741
```

#### yarn

```js
yarn add --dev eslint-config-ksv741
```

#### pnpm

```js
pnpm add --save-dev eslint-config-ksv741
```

### Использование

Для подключения - добавьте конфиг в файл конфигурации `Eslint`

```js
extends: ["ksv741"]
```

Доступны следующие конфиги:
* `ksv741/js-base` - содержит правила для файлов `JavaScript`
* `ksv741/js-react` - содержит правила для файлов `JavaScript` и правила для `JSX` и `React`
* `ksv741/ts-base` - содержит правила для файлов `JavaScript` и правила для файлов `TypeScript`
* `ksv741/ts-react` - содержит правила для файлов `JavaScript`, `TypeScript`, `JSX` и `React`
* `ksv741/jest` - содержит правила для `Jest`
* `ksv741` - содержит правила для файлов `JavaScript`, `TypeScript`, `JSX`, `React`, `Jest` - Рекомендуется использовать



### Настройка

Можно точечно переопределить для каких файлов использовать определенный конфиг

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
    },
    {
      files: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)"
      ],
      extends: ["ksv741/jest"]
    }
  ]
```

### Кастомизация

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

**ВНИМАНИЕ**  
Для проектов использующих `TypeScript` предустановлены [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser) и [`eslint-import-resolver-typescript`](https://www.npmjs.com/package/eslint-import-resolver-typescript).
Алиасы путей обычно хранятся в настройке `paths` файла `tsconfig.json`


По умолчанию, для файлов `.js`, `.jsx` **не** предустановлен парсер и плагин для разрешения путей, 
т.к. в зависимости от проекта инструменты могут значительно отличаться,
предполагается что эта настройка будет установлена самостоятельно.


### Плагины:
* [`@stylistic/eslint-plugin`](https://eslint.style/rules) - [Rules](https://eslint.style/rules)
* [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) [Rules](https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules)
* [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) [Rules](https://typescript-eslint.io/rules/)
* [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) [Rules](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules)
* [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) [Rules](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules)
* [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) [Rules](https://legacy.reactjs.org/docs/hooks-rules.html#eslint-plugin)
* [`eslint-plugin-jest`](https://www.npmjs.com/package/eslint-plugin-jest) [Rules](https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules)
* [`eslint-plugin-jest-dom`](https://www.npmjs.com/package/eslint-plugin-jest-dom) [Rules](https://github.com/testing-library/eslint-plugin-jest-dom/tree/main/docs/rules)
* [`eslint-plugin-jest-formatting`](https://www.npmjs.com/package/eslint-plugin-jest-formatting) [Rules](https://github.com/dangreenisrael/eslint-plugin-jest-formatting/tree/master/docs/rules)
* [`eslint-plugin-testing-library`](https://www.npmjs.com/package/eslint-plugin-testing-library) [Rules](https://github.com/testing-library/eslint-plugin-testing-library)
