module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
  },

  ignorePatterns: ['*.min.*'],

  // parser: '@typescript-eslint/parser',

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
  },

  plugins: ['@typescript-eslint', 'import'],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'next/core-web-vitals',
    'prettier',
  ],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'import/no-unresolved': 'warn',
    'import/order': [
      'error',
      {
        // 'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
      },
    ],
    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/consistent-type-definitions': 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      { disallowTypeAnnotations: false },
    ],
    '@typescript-eslint/default-param-last': 'warn',

    'default-param-last': 'off', // handled by typescript-eslint
    'no-constant-condition': 'warn',
    'no-return-await': 'warn',
    'no-undef': 'off', // interferes with unplugin-auto-import //TODO: remove in future
    'no-unused-vars': 'off', // handled by typescript-eslint
    'object-shorthand': 'warn',
    'spaced-comment': 'warn',

    // '@next/next/no-html-link-for-pages': 'off',
  },
}
