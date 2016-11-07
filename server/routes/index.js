import express from 'express'
import intlData from '../translates'
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  let messages = res.locals.messages
  
  res.render('index', {
    title: 'Home',
    data: {
      intl: { messages }
    }
  })
})

export default router
