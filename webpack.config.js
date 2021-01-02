const { mode } = require("webpack-nano/argv");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode,
  plugins: [new HtmlWebpackPlugin({ context: { title: "Demo" } })],
};
