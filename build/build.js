require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var gulp = require('gulp')
var zip = require('gulp-zip')

var spinner = ora('building for production...')
spinner.start()

var target = process.env.TARGET
var STAGE = process.env.STAGE

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))

    const zipFilesRoot = path.join(config.build.assetsRoot, '/**/*.*')
    const time = Date.now()
    if (STAGE === 'production') {
      let buildZipProcess = gulp
        .src(zipFilesRoot)
        .pipe(zip(target + '_' + time + '.zip'))
        .pipe(gulp.dest('dist/zipfiles'))
      buildZipProcess.on('end', () => {})
    }
  })
})
