const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: process.env.NODE_ENV === "development" ? "development" : "production",

  entry: './server/server-renderer.js',

  output: {
    filename: 'js/server-renderer.js',
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
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.scss?$/,
        use: [
          process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {loader: 'css-loader', options: { minimize: true }},
          // 'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img/',
              name: '[name].[ext]'
            }  
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', 'scss'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Movies-DB",
      template: "./client/index.html"
      // inject: false
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
}