import config from './lib/config'
import i18n from './lib/i18n'

import homeController from './app/home.controller'
import dashboardController from './app/dashboard.controller'

export default (app) => {
  const availableLanguages = config().languages.list.join('|')
  // en|es

  app.use((req, res, next) => {
    res.__ = res.locals.__ = i18n.load(i18n.getCurrentLanguage(req.url))
    res.locals.config.basePath = `${config().baseUrl}${i18n.getLanguagePath(req.url)}`
    res.locals.basePath = res.locals.config.basePath
    res.locals.currentLanguage = i18n.getCurrentLanguage(req.url)

    next()
  })
}
