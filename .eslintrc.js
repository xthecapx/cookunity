module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    env: {
        node:  true,
        es6: true,
        jest: true
    },
    rules: {
        'semi': [2, 'always'],
        'require-yield': 0,
        'strict': ['error', 'global'],
        'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],
        'quotes': ['error', 'single', { 'avoidEscape': true } ],
        'space-before-function-paren': ['error', 'never']
    },
    ignorePatterns: ['dist/*'],
    overrides: [
        {
          'files': ['src/**/*.js[x]'],
          'rules': {
            'require-jsdoc': 'off'
          }
        }
    ],
};
