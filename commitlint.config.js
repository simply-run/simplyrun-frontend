module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-case': [2, 'always', 'sentence-case'],
    'header-max-length': [2, 'always', 72],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'type-case': [2, 'always', 'sentence-case'],
    'type-enum': [
      2,
      'always',
      [
        'Feat',
        'Fix',
        'Docs',
        'Style',
        'Refactor',
        'Test',
        'Chore',
        'Revert',
        'Etc',
      ],
    ],
  },
};
