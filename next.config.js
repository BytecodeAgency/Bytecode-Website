/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@bytecode/components']);
module.exports = withTM({
  reactStrictMode: true,
});