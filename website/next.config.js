/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require("next-transpile-modules")(["../components", "@bytecode/ui-library"]);
module.exports = withTM({
	reactStrictMode: true,
});