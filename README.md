<p align="center">
  <a href="http://algoan.com/" target="blank"><img src="https://media.licdn.com/dms/image/C4E0BAQH-hIlc5g9g7w/company-logo_200_200/0?e=2159024400&v=beta&t=j5y9KO1P22GsMx3vBNawrpvyvjD2iyBWGeVPUsRkn5s" width="320" alt="Algoan Logo" /></a>
</p>

# Algoan ESLint config

Algoan [ESLint](https://eslint.org) configuration shared for NodeJS projects written in [TypeScript](https://www.typescriptlang.org/) and using [prettier](https://prettier.io/). It is the ESLint equivalent for [@yelloan/tslint](https://github.com/yelloan/yelloan-tslint) rules.

## Installation

First, install this module running:

```bash
npm install @algoan/eslint-config --save-dev
```

Then, create a `.eslintrc.json` file:

```json
{
  "extends": "@algoan/eslint-config"
}
```

## Usage

In your `package.json` file, add a script:

```json
{
  "lint": "eslint src/**/**.ts"
}
```

## TSLint To ESLint Report

Using the [tsling-to-eslint-config](https://github.com/typescript-eslint/tslint-to-eslint-config) script:

```log
8 ESLint rules behave differently from their TSLint counterparts:
  * @typescript-eslint/no-unused-expressions:
    - The TSLint optional config "allow-new" is the default ESLint behavior and will no longer be ignored.
  * prefer-arrow/prefer-arrow-functions:
    - ESLint does not support allowing named functions defined with the function keyword.
  * camelcase:
    - Leading undescores in variable names will now be ignored.
  * no-underscore-dangle:
    - Leading and trailing underscores (_) on identifiers will now be ignored.
  * no-redeclare:
    - ESLint does not support check-parameters.
  * @typescript-eslint/no-unused-vars:
    - Please read the following article as the rule behaviour may change on the short term: https://github.com/typescript-eslint/typescript-eslint/issues/1856
  * @typescript-eslint/strict-boolean-expressions:
    - String, number, enum, and mixed union types are now forbidden.
  * class-methods-use-this:
    - allow-public methods will no longer be ignored.

15 rules are not known by tslint-to-eslint-config to have ESLint equivalents:
  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "completed-docs".
  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "encoding".
  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "match-default-export-name".
  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "no-dynamic-delete".
  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "no-inferred-empty-object-type".
  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "no-mergeable-namespace".
  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "no-unnecessary-callback-wrapper".
  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "no-unsafe-any".
  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "prefer-conditional-expression".
  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "prefer-method-signature".
  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "prefer-switch".
  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "return-undefined".
  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "strict-type-predicates".
  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "switch-final-break".
  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint's "typedef".
```
