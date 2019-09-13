module.exports = {
    parser:  '@typescript-eslint/parser',
    extends:  [
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
    ],
    plugins: [
        "jest",
        "security",
        "prettier"
    ],
    parserOptions:  {
        ecmaVersion:  2018,
        sourceType:  'module',
        ecmaFeatures:  {
            jsx:  true,
        },
    },
    rules: {
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-var-requires": 0,
        "global-require": 0,
        "import/no-dynamic-require": 0,
        "prettier/prettier" : ["error"],
    },
    env: {
        jest: true,
    }
};
