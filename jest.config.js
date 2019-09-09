module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    // setupFiles: ['./tests/config/global-setup.ts'],
    testEnvironment: 'node',
    testRegex: 'tests/(.*).(test).ts?',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },

    globals: {
        'ts-jest': {
            diagnostics: {
                ignoreCodes: [],
            },
        },
    },
};
