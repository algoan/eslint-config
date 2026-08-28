'use strict';

const stylistic = require('@stylistic/eslint-plugin');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const prettierConfig = require('eslint-config-prettier');
const importX = require('eslint-plugin-import-x');
const jsdoc = require('eslint-plugin-jsdoc');
const noNull = require('eslint-plugin-no-null');
const preferArrow = require('eslint-plugin-prefer-arrow');

/**
 * Algoan shared ESLint flat configuration.
 *
 * Exported as an array so consumers can spread it in their own
 * `eslint.config.js`:
 *
 *   const algoan = require('@algoan/eslint-config');
 *   module.exports = [...algoan, { rules: { ... } }];
 */
module.exports = [
  // Disable formatting rules conflicting with prettier first, so the rules
  // defined below always take precedence (same order as the legacy config).
  prettierConfig,
  {
    name: '@algoan/eslint-config',
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    languageOptions: {
      parser: typescriptParser,
      sourceType: 'module',
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    plugins: {
      '@stylistic': stylistic,
      '@typescript-eslint': typescriptEslint,
      // eslint-plugin-import-x registered under the historical "import"
      // namespace so existing `import/...` rule overrides keep working.
      import: importX,
      jsdoc,
      'no-null': noNull,
      'prefer-arrow': preferArrow,
    },
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array',
        },
      ],
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            constructors: 'off',
            parameterProperties: 'no-public',
          },
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'default',
          format: ['camelCase'],
        },
      ],
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      // Replaces @typescript-eslint/no-empty-interface: still forbids empty
      // interfaces but keeps the `{}` type allowed.
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowObjectTypes: 'always',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      // Replaces @typescript-eslint/ban-types: same banned types as before
      // (the default list, minus String which was explicitly allowed).
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          types: {
            Object: {
              message: 'Use object instead.',
            },
            Boolean: {
              message: 'Use boolean instead.',
            },
            Number: {
              message: 'Use number instead.',
            },
            Symbol: {
              message: 'Use symbol instead.',
            },
            Function: {
              message: 'Use an explicit function type instead, like `() => void`.',
            },
          },
        },
      ],
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      // Replaces the historical "no unsafe any" convention.
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unnecessary-type-arguments': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/restrict-plus-operands': 'error',
      // Replaces the deprecated core no-return-await rule.
      '@typescript-eslint/return-await': ['error', 'never'],
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/triple-slash-reference': [
        'error',
        {
          path: 'always',
          types: 'prefer-import',
          lib: 'always',
        },
      ],
      '@typescript-eslint/unbound-method': 'error',
      '@typescript-eslint/unified-signatures': 'error',
      // Keeps the historical "prefer method signature" convention.
      '@typescript-eslint/method-signature-style': ['error', 'method'],
      // Moved from ESLint core to @stylistic (deprecated in core).
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
      ],
      '@stylistic/spaced-comment': [
        'error',
        'always',
        {
          markers: ['/'],
        },
      ],
      'arrow-body-style': 'error',
      camelcase: 'error',
      'class-methods-use-this': ['error', { enforceForClassFields: false }],
      complexity: 'error',
      'constructor-super': 'error',
      curly: 'error',
      'default-case': 'error',
      eqeqeq: ['error', 'always'],
      'guard-for-in': 'error',
      // Replaces the deprecated id-blacklist rule (same options).
      'id-denylist': [
        'error',
        'any',
        'Number',
        'number',
        'String',
        'string',
        'Boolean',
        'boolean',
        'Undefined',
        'undefined',
      ],
      'id-match': 'error',
      'import/no-default-export': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: false,
        },
      ],
      'import/no-internal-modules': 'off',
      'import/order': 'error',
      'jsdoc/check-alignment': 'error',
      'jsdoc/check-indentation': 'error',
      'jsdoc/no-types': 'error',
      // Functions, methods, classes, interfaces and enums must be documented.
      'jsdoc/require-jsdoc': [
        'error',
        {
          require: {
            ArrowFunctionExpression: true,
            ClassDeclaration: true,
            ClassExpression: true,
            FunctionDeclaration: true,
            FunctionExpression: true,
            MethodDefinition: true,
          },
          contexts: ['TSInterfaceDeclaration', 'TSEnumDeclaration'],
        },
      ],
      'max-classes-per-file': ['error', 1],
      'max-lines': ['error', 500],
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-cond-assign': 'error',
      'no-console': 'error',
      'no-debugger': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': 'error',
      'no-eval': 'error',
      'no-fallthrough': 'error',
      'no-invalid-this': 'error',
      'no-irregular-whitespace': 'off',
      'no-magic-numbers': [
        'error',
        {
          ignoreArrayIndexes: false,
          ignore: [0, 1],
        },
      ],
      'no-new-wrappers': 'error',
      'no-null/no-null': 'error',
      'no-param-reassign': 'error',
      'no-redeclare': 'error',
      'no-restricted-imports': 'off',
      'no-sequences': 'error',
      'no-shadow': 'off',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-underscore-dangle': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-labels': 'error',
      'no-var': 'error',
      'no-void': ['error', { allowAsStatement: true }],
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'prefer-arrow/prefer-arrow-functions': 'error',
      'prefer-const': 'error',
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      radix: 'error',
      'use-isnan': 'error',
      'valid-typeof': 'off',
      yoda: 'error',
    },
  },
];
