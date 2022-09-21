const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');

// https://stackoverflow.com/a/64564708
class WatchRunPlugin {
  apply(compiler) {
      compiler.hooks.watchRun.tap('WatchRun', (comp) => {
          if (comp.modifiedFiles) {
              const changedFiles = Array.from(comp.modifiedFiles, (file) => `\n  ${file}`).join('');
              console.log('===============================');
              console.log('FILES CHANGED:', changedFiles);
              console.log('===============================');
          }
      });
  }
}

module.exports = {
  devtool: "source-map",
  entry: {
    background: path.resolve(__dirname, './src/background.js'),
    content: path.resolve(__dirname, './src/content.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'static' }],
    }),
    new WatchRunPlugin()
  ],
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  watchOptions: { ignored: ["**/node_modules", "**/dist"] }
};
