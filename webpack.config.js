const path = require("path");

const APP_DIR = path.resolve(__dirname, "src");
const BUILD_DIR = path.resolve(__dirname, "public");

const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  watch: true,
  devtool: 'source-map',
  
  entry: {
    javascript: './client/app'
  },

  output: {
    filename: "[name].bundle.js",
    path: BUILD_DIR
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Movies-DB",
      template: "./client/index.html"
      // template: `${APP_DIR}/client/index.html`,
      // inject: false
    })
  ],

  devServer: {
    // compress: true,
    // port: 9000,
    // contentBase: BUILD_DIR,
    // publicPath: '/',
  }
}