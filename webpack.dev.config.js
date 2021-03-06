'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
//pugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
//config
const base = require('./webpack.base.config');
const baseConfig = base.webpackConfig;
const pathConfig = base.commonPath;

module.exports = merge(baseConfig, {
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true, //-true:任意的 404 响应都可能需要被替代为 index.html
    hotOnly: true,
    inline: true, //false则使用iframe模式
    // noInfo: false,  //-隐藏每次启动或保存之后显示的bundle信息
    contentBase: pathConfig.publicPath,
    port: 3300,
    stats: { colors: true }, //- 等同于`webpack --colors`,
    // proxy: {
    //   '/api/*': {
    //     target: 'https://api.douban.com/v2/',
    //     changeOrigin: true, //解决跨域问题
    //     pathRewrite: { '^/api': '' }
    //   }
    // }
  },
  entry: {
    main: [
      'webpack-dev-server/client?http://0.0.0.0:3300/',
      'webpack/hot/dev-server',
      'eventsource-polyfill',
      // 'webpack-hot-middleware/client',
      // 'react-hot-loader/patch',
      path.join(pathConfig.srcPath, 'main.js')
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: [
          // 使用babel plugin或者webpack loader都行
          // 'react-hot-loader/webpack',
          'babel-loader'
        ],
        exclude: path.join(pathConfig.rootPath, 'node_modules')
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]--[local]-[hash:base64:5]'
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1 //告示@import来的css文件使用之前多少个loader;只对.css文件起效
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ExtractTextPlugin('css/[name].[hash:5].css'),
    new webpack.HotModuleReplacementPlugin(), //模块热替换,如果不在dev-server模式下
    new webpack.NoEmitOnErrorsPlugin() //跳过输出阶段。这样可以确保输出资源不会包含错误, 取代webpack 1 的 NoErrorsPlugin 插件。
    // new BrowserSyncPlugin({
    //   host: '0.0.0.0',
    //   port: 3300,
    //   proxy: 'http://0.0.0.0:3300/',
    //   logConnections: false,
    //   notify: false
    // }, {
    //   reload: false
    // })
    // new OpenBrowserPlugin({ url: 'http://localhost:3300' })
  ]
});
