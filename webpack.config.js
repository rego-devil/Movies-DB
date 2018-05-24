const path = require("path");
const webpack = require("webpack");

const APP_DIR = path.resolve(__dirname, "src");
const BUILD_DIR = path.resolve(__dirname, "public");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  devtool: 'source-map',
  mode: process.env.NODE_ENV === "development" ? "development" : "production",

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
        test: /\.scss?$/,
        use: [
          process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {loader: 'css-loader', options: { minimize: true }},
          // 'postcss-loader',
          'sass-loader',
        ]
        // use: ExtractTextPlugin.extract({
        //   use: [
        //     { 
        //       loader: "css-loader" // translates CSS into CommonJS
        //     }, 
        //     { 
        //       loader: "sass-loader", // compiles SCCC to CSS
        //     }  
        //   ],
        //   fallback: "style-loader"   // creates style nodes from JS strings
        // })
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
    // new ExtractTextPlugin({
    //   filename: "style.css",
    //   disable: process.env.NODE_ENV === "development"
    // }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    // hot: true,
    port: 9000,
    inline: true,
    contentBase: './',
    historyApiFallback: {
      index: 'index.html'
    }
    // publicPath: "/",
    // contentBase: "./public",
  }
}