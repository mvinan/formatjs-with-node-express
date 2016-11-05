import { minify } from 'html-minifier'
import config from '../config'

function compress (content) {
  if (!config().html.minify) {
    return content.fn(this)
  }
  return minify(content.fn(this), {
    removeComments: true,
    collapseWhitespace: true,
    minifyJS: true
  })
}

export default {
  compress: compress
}
