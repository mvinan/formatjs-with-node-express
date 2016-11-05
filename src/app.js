'use strict'
import express from 'express'
import path from 'path'
// import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import exphbs from 'express-handlebars'

import hbsHelpers from './lib/helpers/handlebars'
import styles from './lib/styles'
import config from './lib/config'

import index from './routes/index'
import users from './routes/users'

const app = express()

// Loading config
global.__config = config
const port = __config().serverPort || 3000

// Sass middleware
if (!__config().html.css.sassCompile) {
  app.use(styles.sass())
}

// view engine setup
app.engine(__config().views.engine, exphbs({
  extname: __config().views.extension,
  defaultLayout: 'default',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  helpers: hbsHelpers
}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', __config().views.extension)

// uncomment after placing your favicon in public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', index)
app.use('/users', users)

// Disabling x-powered-by
app.disable('x-powered-by')

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.listen(port, () => console.log(`Server running on: http://0.0.0.0:${port}` ))

export default app
