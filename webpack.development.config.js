'use strict';
const webpack = require('webpack');
const buildConfig = require('./build.config');
const commonConfig = require('./webpack.common.config');

const config = Object.assign({}, commonConfig, {
  debug: true,
  cache: true,
  progress: true,
  module: Object.assign({}, commonConfig.module, {
    loaders: commonConfig.module.loaders.concat([
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap',
      },
      {
        test: /\.less$/,
        loader: 'style!css?sourceMap!less?sourceMap',
      },
      {
        test: /\.(gif|jpg|png|svg|woff|woff2|eot|ttf)$/,
        loader: 'url?name=static/[name].[hash].[ext]&limit=100000',
      },
    ]),
  }),
  output: {
    path: buildConfig.DIST_PATH + '/pack/',
    filename: '[name].dev.js',
    chunkFilename: '[name].dev.js',
  },
  devtool: 'eval-source-map',
});

module.exports = config;

