import { minify } from 'html-minifier'
import config from './config'
import handlebars from 'handlebars'
import HandlebarsIntl from 'handlebars-intl'

import express from 'express'
const app = express()

HandlebarsIntl.registerWith(handlebars)

const compress = function (content) {
  if (!config().html.minify) {
    return content.fn(this)
  }
  return minify(content.fn(this), {
    removeComments: true,
    collapseWhitespace: true,
    minifyJS: true
  })
}

app.locals.title = "Handlebars with Nodejs"

export default {
  compress,
}
