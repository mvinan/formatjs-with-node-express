import { minify } from 'html-minifier'
import config from './config'
import Handlebars from 'handlebars'
import HandlebarsIntl from 'handlebars-intl'

HandlebarsIntl.registerWith(Handlebars)

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



export function addedLangToEndLinkHelper (app) {
  app.use((req, res, next) => {
    let locale = res.locals.locale
    let query = req.query.lang

    // {{link 'nombre link' url="/"}}
    Handlebars.registerHelper('link', function(text, url){
      let result
      text = Handlebars.Utils.escapeExpression(text);
      url  = Handlebars.Utils.escapeExpression(url.hash.url);

      query
        ? result = `<a href="${url}?lang=${locale}"> ${text} </a>`
        : result = `<a href="${url}"> ${text} </a>`

      return new Handlebars.SafeString(result)
    })

    next()
  })
}

export default {
  compress
}
