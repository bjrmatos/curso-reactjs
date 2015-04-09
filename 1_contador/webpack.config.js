'use strict';

var path = require('path'),
    webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './app'
  ],
  devServer: {
    contentBase: '.',
    host: 'localhost',
    port: 9000
  },
  devtool: 'eval',
  debug: true,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.js|\.jsx/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};