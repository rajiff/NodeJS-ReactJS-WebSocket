const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  mode: (process.env.NODE_ENV || 'development'),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'src', '__tests__'), path.resolve(__dirname, 'build')],
        loader: ["babel-loader", "eslint-loader"]
        // loader: ["babel-loader"]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'AppTemplate',
      template: './public/index.html',
      favicon: './public/favicon.ico'
      // inject: 'body'
    })
  ],
  devtool: 'source-map',
  devServer: {
    // historyApiFallback: true,
    // contentBase: './',
    proxy: {
      "/": {
        target: "http://localhost:4000"
        /*bypass: function(req, res, proxyOptions) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
          }
        }*/
      }
    }
  }
};