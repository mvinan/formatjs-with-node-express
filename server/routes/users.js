import express from 'express'
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  let messages = res.locals.messages

  res.render('users', {
    title: 'Users',
    data: {
      intl: { messages }
    }
  })
})

export default router
