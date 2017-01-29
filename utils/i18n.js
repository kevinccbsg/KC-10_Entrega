'use strict'
const i18n = require('i18n')

i18n.configure({
  locales: ['es', 'en', 'it'],
  directory: __dirname + '/locales',
  defaultLocale: 'es',
  cookie: 'i18n'
})

module.exports = (req, res, next) => {

  i18n.init(req, res)

  let current_locale = i18n.getLocale()

  return next()
}