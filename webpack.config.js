const { mode } = require("webpack-nano/argv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackPluginServe } = require("webpack-plugin-serve");

module.exports = {
  watch: mode === "development",
  entry: ["./src", "webpack-plugin-serve/client"],
  mode,
  plugins: [
    new HtmlWebpackPlugin({ context: { title: "Demo" } }),
    new WebpackPluginServe({
      port: process.env.PORT || 3000,
      static: "./dist",
      liveReload: true,
      waitForBuild: true,
      historyFallback: true,
    }),
  ],
};
