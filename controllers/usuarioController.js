'use strict'
const debug = require('debug')('Nodepop:controllers:usuarioController')
const Usuario = require('../models/Usuario')
const helper = require('../helpers/responseHelper')
const jwt = require('jsonwebtoken')
const config = require('app-config')

module.exports.authenticate = (req, res) => {
  debug('authenticate')
  var email = req.body.email
  var pwd = req.body.password
  Usuario.findOne({ email: email }, (err, user) => {
    if (err) return helper.response(res, false, 'Internal Server Error', 500)
    if (!user) return helper.response(res, false, 'Not Found', 404)

    user.verifyPassword(pwd, (err, isMatch) => {
      if (err) return helper.response(res, false, 'Internal Server Error', 500)
      if (!isMatch) return helper.response(res, true, 'Forbidden', 403)

      let token = jwt.sign(user, config.config.optsAuth.secretOrKey, { expiresIn: 10000 })
      helper.response(res, true, { token: `JWT ${token}` }, 200)
    })
  })
}
