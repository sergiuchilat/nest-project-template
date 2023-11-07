module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
      'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/prefer-readonly': 'error',

    'no-debugger': 'warn',
    'quotes': ['warn', 'single'],
    'prefer-const': 'error',
    'indent': ['error', 2],
    'semi': ['warn', 'always'],
    'no-duplicate-case': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-imports': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-self-compare': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': "warn",
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-unused-private-class-members': 'warn',
    'no-use-before-define': 'warn',
    'valid-typeof': 'error',
    'curly': 'error',
    'default-case': 'warn',
    'default-case-last': 'warn',
    'default-param-last': ['warn'],
    'dot-notation': 'warn',
    'eqeqeq': 'warn',

//Clasa - pascal
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'method',
        format: ['camelCase'],
      },
    ],
  },
};
