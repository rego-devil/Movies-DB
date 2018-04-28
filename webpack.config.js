const path = require("path");
const webpack = require("webpack");

const APP_DIR = path.resolve(__dirname, "src");
const BUILD_DIR = path.resolve(__dirname, "public");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const isDevelopment = process.env.NODE_ENV != "production";

module.exports = {
  context: path.resolve(__dirname, "src"),
  devtool: 'source-map',
  mode: isDevelopment ? "development" : "production",

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
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.less?$/,
        use: ExtractTextPlugin.extract({
          use: [
            { 
              loader: "css-loader" // translates CSS into CommonJS
            }, 
            { 
              loader: "less-loader", // compiles Less to CSS
              options: { 
                sourceMap: true,
                paths: [
                  path.resolve(__dirname, 'node_modules')
                ]
              }
            }  
          ],
          fallback: "style-loader"   // creates style nodes from JS strings
        })
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
    extensions: ['.js', '.jsx', 'less'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Movies-DB",
      template: "./client/index.html"
      // template: `${APP_DIR}/client/index.html`,
      // inject: false
    }),
    new ExtractTextPlugin({
      filename: "style.css",
      disable: process.env.NODE_ENV === "development"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    hot: true,
    inline: true,
    open: true,
    port: 9000
  }
}