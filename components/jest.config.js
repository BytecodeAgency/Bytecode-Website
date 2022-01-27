module.exports = {
	setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
	collectCoverageFrom: [
		"src/components/**/*.ts",
		"!src/components/**/*.stories.ts",
	],
	coverageReporters: ["text", "html"],
	moduleNameMapper: {
		"\\.css$": "identity-obj-proxy",
	},
	testEnvironment: "jsdom",
};
