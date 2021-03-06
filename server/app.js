import express from 'express'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import exphbs from 'express-handlebars'
import config from './lib/config'

import hbsHelpers, {addedLangToEndLinkHelper} from './lib/handlebars'
import index from './routes/index'
import users from './routes/users'
import intlData from './translates'

const app = express()

// Connection with socket.io
const server = require('http').Server(app)
let io = require('socket.io')(server)

// Loading config
const port = config().serverPort || 3000
server.listen(port, () => console.log(`Server running and Ready`))

// view engine setup
app.engine(config().views.engine, exphbs({
  extname: config().views.extension,
  defaultLayout: 'default',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  helpers: hbsHelpers
}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', config().views.extension)

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '..', 'public')))

// Testing Middlewares
app.use(intlData)
addedLangToEndLinkHelper(app)

// Routes
app.use('/', index)
app.use('/users', users)

// Connection with Socket
io.on('connection', (socket) => {
  console.log('User connected')
  socket.on('vote:clicked', vote => {
    app.use((req, res, next) => {
      socket.emit('vote:done', res.locals.locale)
      next()
    })
  })

  socket.on('disconnect', () => {
    console.log('User Disconected')
  })
})

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

export default app
