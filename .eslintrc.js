module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:testing-library/react',
    'prettier',
    'plugin:storybook/recommended',
  ],
  rules: {
    'import/order': [
      'warn',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@next/next/no-img-element': 'off',
    'react/display-name': 'off',
  },
};
