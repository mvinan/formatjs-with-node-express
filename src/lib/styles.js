'use strict'

var path = require('path')
var sass = require('node-sass-middleware')
var postcss = require('postcss-middleware')
var autoprefixer = require('autoprefixer')

// paths
var srcPath = path.join(__dirname, '..')
var destPath = path.join(__dirname, '..', 'public')

module.exports = {
  sass: sassCompile,
  postcss: postcssCompile
}

// options for node-sass
var sassOptions = {
  src: srcPath,
  dest: destPath,
  debug: true,
  outputStyle: 'extended'
}

function sassCompile () {
  return sass(sassOptions)
}

// options for postcss
var postcssOptions = {
  src: destPath,
  plugins: [
    autoprefixer()
  ]
}

function postcssCompile () {
  return postcss(postcssOptions)
}
