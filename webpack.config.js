const webpack = require('webpack');

const path = require("path");

const APP_DIR = path.resolve(__dirname, "src");
const BUILD_DIR = path.resolve(__dirname, "public");

const HtmlWebpackPlugin = require('html-webpack-plugin')


const config = {
  mode: "development",
  watch: true,
  
  entry: {
    javascript: APP_DIR + "/client/app"
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].bundle.js"
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // favicon: `${APP_DIR}/favicon.ico`,
      template: `${APP_DIR}/client/index.html`,
      inject: false
    })
  ]
}

module.exports = config;