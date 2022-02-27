const { mode } = require("webpack-nano/argv");
const { merge } = require("webpack-merge");
const parts = require("./webpack.parts");

const cssLoaders = [parts.postCssLoader()];

// Set config for css-modules
const modulesConf = {
  localIdentName: "[folder]__[local]--[hash:base64:5]",
  auto: true,
};

const commonConfig = merge([
  { entry: ["./src"] },
  parts.page({ title: "Demo" }),
  parts.extractCSS({
    loaders: cssLoaders,
    modules: modulesConf ? modulesConf : false,
  }),
]);

const productionConfig = merge([parts.eliminateUnusedCSS()]);

const developmentConfig = merge([
  { entry: ["webpack-plugin-serve/client"] },
  parts.devServer(),
]);

const getConfig = (mode) => {
  process.env.NODE_ENV = mode;
  switch (mode) {
    case "production":
      return merge(commonConfig, productionConfig, { mode });
    case "development":
      return merge(commonConfig, developmentConfig, { mode });
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`);
  }
};

module.exports = getConfig(mode);
