const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

// const htmlPlugin = new HtmlWebPackPlugin({
//   template: "./src/index.html",
//   filename: "./index.html"
// });

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve('lib'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  // plugins: [htmlPlugin]
};