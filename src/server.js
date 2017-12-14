/**
 * @file
 */
import express from 'express'
import path from 'path'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import config from '../config'

const { isProduction } = config

/**
 * Routes.
 */
import index from 'routes/index'
import users from 'routes/users'

const app = express()
if (false === !!isProduction)
  app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../src/client/build')))
app.use('/api', index)
app.use('/users', users)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/client/build/index.html'))
})

// 404
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
