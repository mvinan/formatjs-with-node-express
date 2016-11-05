import config from './config'
import _ from 'lodash'

export default {
  getCurrentLanguage,
  getLanguagePath,
  load
}

const getCurrentLanguage = (url) => {
  const params = utils.Url.getParamsFromUrl(url)
  return _.includes(config().languages.list, params[0])
    ? params [0]
    : config().languages.default
}

const getLanguagePath = () => {
  const params = utils.Url.getParamsFromUrl(url)
  return _.includes(config().languages.list, params[0])
  ? `/${params[0]}`
  : ''
}

const load = language => {
  let content
  if(_.includes(config().languages.list, language)) {
    try {
      content = require(`../content/i18n/${language}`)
    } catch (e) {
      content = require(`../content/i18n/${config().languages.default}`)
    }
  } else {
    content = require(`../content/i18n/${config().languages.default}`)
  }

  return content
}
