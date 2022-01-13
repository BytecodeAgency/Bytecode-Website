/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['../components']);
module.exports = withTM({
  reactStrictMode: true,
});