'use strict';
const autoprefixer = require('autoprefixer');
const buildConfig = require('./build.config.js');
const path = require('path');

const config = {
  resolve: {
    alias: {
      'doT': path.join(__dirname,'modules/uicontrol/doT/doT.js'),
      'jquery': path.join(__dirname,'modules/uicontrol/jquery/jquery.js'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.html?$/,
        loader: 'raw',
      },
    ],
  },
  entry: {
    'homePage': './modules/apps/homePage',
  },
  postcss() {
    return [autoprefixer({ browsers: buildConfig.AUTOPREFIXER_BROWSERS })];
  },
};

module.exports = config;
