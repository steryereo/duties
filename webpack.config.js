const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    background: path.resolve(__dirname, "./src/background.js"),
    content: path.resolve(__dirname, "./src/content.js"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
  },
  watchOptions: { ignored: ["**/node_modules", "**/dist"] },
};
