import path from 'path'
import sass from 'node-sass-middleware'
import postcss from 'postcss-middleware'
import autoprefixer from 'autoprefixer'
import lostGrid from 'lost'

// paths
const srcPath = path.join(__dirname, '..')
const destPath = path.join(__dirname, '..', 'public')

module.exports = {
  sass: sassCompile,
  postcss: postcssCompile
}

function sassCompile () {
  // options for node-sass
  const sassOptions = {
    src: srcPath,
    dest: destPath,
    debug: true,
    outputStyle: 'extended'
  }
  return sass(sassOptions)
}

function postcssCompile () {
  // options for postcss
  const postcssOptions = {
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
