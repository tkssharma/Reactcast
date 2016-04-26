/**
 * Dependencies
 */
var webpack = require('webpack');
var path = require('path');

/**
 * Webpack config
 */
module.exports = {
  devtool: 'inline-source-map',

  entry: [
    './src/entry'
  ],

  output: {
    path: path.join(__dirname, '/public/'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders:  ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  }
};
