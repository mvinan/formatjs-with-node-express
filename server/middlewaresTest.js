import config from './lib/config'

export const test = (req, res, next) => {
  const availablesLangs = config().languages.list.join('|')
  const defaultLang = config().languages.default

  res.locals.defaultLang = defaultLang
  res.locals.availableLang = availablesLangs
  next()
}
