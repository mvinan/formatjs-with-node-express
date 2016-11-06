import express from 'express'
import intlData from '../translates'
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Home',
    data: { intl: intlData }
  })
})

export default router
