import en from './en-US'
import es from './es'

let MESSAGES = {}
MESSAGES.es = es
MESSAGES['en-US'] = en

const locale = 'es'
const intlData = {
  "locales": locale,
  "messages": MESSAGES[locale]
}

export default intlData
