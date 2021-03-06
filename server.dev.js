'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
// const proxy = require('http-proxy-middleware');
//config
const devConfig = require('./webpack.dev.config');

new WebpackDevServer(
  webpack(devConfig), devConfig.devServer
).listen(
  devConfig.devServer.port,
  '0.0.0.0',
  function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + devConfig.devServer.port);
  }
);
