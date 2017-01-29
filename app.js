'use strict'
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const pug = require('pug')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const apiRouter = require('./router/api')
const passport = require('passport')
const i18n = require('./utils/i18n');
// Express application
const app = express()

// mongoose helper connection
require('./helpers/connectionHelper')

// Express app middlewares
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(i18n)
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname)))
app.use(passport.initialize())

app.use('/apiv1', apiRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found')
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
  res.render('error', { error: res.locals.message })
})

module.exports = app
