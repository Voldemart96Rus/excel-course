module.exports = {
    parser: '@babel/eslint-parser',
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'google'],
    rules: {
        'indent': ['error', 4],
        'max-len': ['error', {'code': 120}],
    },
};
