const path = require("path");

// from https://github.com/arackaf/customize-cra/blob/7e97127e530cc6827af66061525e29925e347670/src/customizers/webpack.js#L28
// via https://stackoverflow.com/a/58202367/363448
const disableEsLint = (config) => {
  let eslintRules = config.module.rules.filter(
    r => r.use && r.use.some(u => u.options && u.options.useEslintrc !== void 0)
  );
  eslintRules.forEach(rule => {
    config.module.rules = config.module.rules.filter(r => r !== rule);
  });
  return config;
}

module.exports = async ({config}) => {
  config = disableEsLint(config)

  config.module.rules.push({
    test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
  })

  return config
}
