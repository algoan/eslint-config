'use strict';

const algoanConfig = require('..');

module.exports = [
  ...algoanConfig,
  {
    languageOptions: {
      parserOptions: {
        project: 'test/tsconfig.json',
      },
    },
  },
];
