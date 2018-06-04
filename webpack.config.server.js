const path = require("path");
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  context: path.resolve(__dirname, "src"),
  target: 'node',
  mode: process.env.NODE_ENV === "development" ? "development" : "production",

  externals: [nodeExternals()],

  entry: './server/server-renderer.js',

  output: {
    path: path.join(__dirname, 'src/server'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2',
  },

  module: {

    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: 'ignore-loader',
      },
      {
        test: /\.scss?$/,
        loader: 'ignore-loader',
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'ignore-loader',
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [],
}