const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackPluginServe } = require("webpack-plugin-serve");

exports.devServer = () => ({
  watch: true,
  plugins: [
    new WebpackPluginServe({
      port: process.env.PORT || 3000,
      static: "./dist",
      liveReload: true,
      waitForBuild: true,
      historyFallback: true,
    }),
  ],
});

exports.page = ({ title }) => ({
  plugins: [new HtmlWebpackPlugin({ context: { title } })],
});
