/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require("next-transpile-modules")(["@bytecode/ui-library"]);
module.exports = withTM({
	reactStrictMode: true,
});