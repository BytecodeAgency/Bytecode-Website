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
        "prettier/prettier" : ["error"],
        "@typescript-eslint/explicit-function-return-type": 0,
    },
    env: {
        jest: true,
    }
}
