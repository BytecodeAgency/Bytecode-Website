module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.(js)'], // TODO: Make Jest work with JSX
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    // setupFiles: ['./tests/config/global-setup.ts'],
    testEnvironment: 'node',
    testRegex: 'src/(.*).(test).(js|jsx)?',
};
