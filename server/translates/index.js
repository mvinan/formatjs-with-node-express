import en from './en-US'
import es from './es'
import config from '../lib/config'
import _ from 'lodash'

let MESSAGES = {}
MESSAGES.es = es
MESSAGES['en'] = en

let locale = config().languages.default
let data = {
  messages: MESSAGES
}

const intlData = (req, res, next) => {
  res.locals.intlData = data
  res.locals.locale = req.query.lang || locale

  let query = res.locals.locale
  res.locals.messages = data.messages[query]

  next()
}
export default intlData
