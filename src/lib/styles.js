'use strict'

var path = require('path')
var sass = require('node-sass-middleware')
var postcss = require('postcss-middleware')
var autoprefixer = require('autoprefixer')
var lostGrid = require('lost')

// paths
var srcPath = path.join(__dirname, '..')
var destPath = path.join(__dirname, '..', 'public')

module.exports = {
  sass: sassCompile,
  postcss: postcssCompile
}


function sassCompile () {
  // options for node-sass
  var sassOptions = {
    src: srcPath,
    dest: destPath,
    debug: true,
    outputStyle: 'extended'
  }
  return sass(sassOptions)
}


function postcssCompile () {
  // options for postcss
  var postcssOptions = {
    src: function (req) {
      return path.join(destPath, req.path)
    },
    plugins: [
      autoprefixer(),
      lostGrid()
    ]
  }
  return postcss(postcssOptions)
}
