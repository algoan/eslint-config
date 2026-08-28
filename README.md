<p align="center">
  <a href="http://algoan.com/" target="blank">
    <img src="./assets/logo.svg" height="60" alt="Algoan Logo" />
  </a>
</p>

# Algoan ESLint config

Algoan [ESLint](https://eslint.org) configuration shared for NodeJS projects written in [TypeScript](https://www.typescriptlang.org/) and using [prettier](https://prettier.io/).

## Requirements

- ESLint `>= 10` ([flat config](https://eslint.org/docs/latest/use/configure/configuration-files) only)
- TypeScript `>= 4.8.4 < 6.1`
- Prettier `>= 3`
- Node.js `^20.19.0 || ^22.13.0 || >= 24`

## Installation

First, install this module running:

```bash
npm install @algoan/eslint-config --save-dev
```

Then, create an `eslint.config.js` file:

```js
const algoan = require('@algoan/eslint-config');

module.exports = [...algoan];
```

Or with ESM (`eslint.config.mjs`):

```js
import algoan from '@algoan/eslint-config';

export default [...algoan];
```

The configuration applies to `.ts`, `.tsx`, `.mts` and `.cts` files and expects a `tsconfig.json` at the root of your project (rules relying on type information use it). To point to another tsconfig, override `parserOptions`:

```js
const algoan = require('@algoan/eslint-config');

module.exports = [
  ...algoan,
  {
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.eslint.json',
      },
    },
  },
];
```

## Usage

In your `package.json` file, add a script:

```json
{
  "lint": "eslint src"
}
```

## Migrating from v2

- The configuration is now an ESLint [flat config](https://eslint.org/docs/latest/use/configure/configuration-files) array: replace your `.eslintrc.json` (`"extends": "@algoan/eslint-config"`) with an `eslint.config.js` file as shown above.
- ESLint `>= 10` is required.
- The [`import`](https://github.com/un-ts/eslint-plugin-import-x) rules are now provided by `eslint-plugin-import-x`, registered under the historical `import/` namespace: existing rule overrides such as `import/order` keep working.
- Some rules have been removed, replaced or renamed: see the release notes for the detailed list.
