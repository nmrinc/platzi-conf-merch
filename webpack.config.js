//@concept BASIC WEBPACK SETUP

//@a Require path from node
const path = require('path');
//@a Require the HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

//@a Declare the module export object
module.exports = {
  //@a Declare the entry point so webpack starts from this file
  entry: './src/index.js',
  //@a Declare the output directory where the project will compile
  output: {
    //@o Using the path resolve resource and __dirname webpack will part from the root directory
    path: path.resolve(__dirname, 'dist'),
    //@o All the Js used inside the project will compile into this file
    filename: 'bundle.js'
  },
  //@a Declare the resolve object with the extensions to compile
  resolve: {
    //@o In this case as the project will use React, we use js for logic files and jsx for files that use html inside o React files
    extensions: ['.js', '.jsx']
  },
  //@a Declare the module with rules that will tell webpack how to compile
  module: {
    rules: [
      {
        //@o with a REGEX declare which extensions will test
        test: /\.(js|jsx)$/,
        //@a exclude the node_modules folder
        exclude: /node_modules/,
        //@a Declare which loaders will be used
        use: {
          loader: 'babel-loader'
        },
      },
      {
        //@a Declare the html rule
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    //@a With the use of the html webpack plugin, declare which html file will use as template and how will compile
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
  ],
  //@a Generate a development server
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3005
  },
};
