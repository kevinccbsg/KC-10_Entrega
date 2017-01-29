'use strict'
const i18n = require('i18n')
const path = require('path')

i18n.configure({
  locales: ['es', 'en', 'it'],
  directory: path.join(__dirname, '/locales'),
  defaultLocale: 'es',
  cookie: 'i18n'
})

module.exports = (req, res, next) => {
  i18n.init(req, res)
  return next()
}
