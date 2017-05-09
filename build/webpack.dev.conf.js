var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var projectsConfig = require('./../config/projectsConfig')
var projects = projectsConfig.projects

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

// plugins
var plugins = [
  new webpack.DefinePlugin({
    'process.env': config.dev.env,
    __STAGE__:"'dev'"
  }),

  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),

  new FriendlyErrorsPlugin(),

  // new HtmlWebpackPlugin({
  //   filename: 'index.html',
  //   template: 'src/templates/index.html',
  //   inject: true
  // })
]

// entries
var entry = {}
projects.forEach(function (projectsObj, index) {
  plugins.push(new HtmlWebpackPlugin(projectsObj.HtmlWebpackPlugin))
})

projects.forEach(function (projectsObj, index) {
  const projectsEntry = projectsObj.entry
  projectsEntry.forEach(function (e, i) {
    entry[projectsEntry[i]] = './src/entry/' + projectsEntry[i] + '.js'
  })
})

module.exports = merge(baseWebpackConfig, {
  entry,
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins
})
