'use strict'
const debug = require('debug')('Nodepop:controllers:usuarioController')
const Usuario = require('../models/Usuario')
const helper = require('../helpers/responseHelper')
const jwt = require('jsonwebtoken')
const config = require('app-config')

module.exports.authenticate = (req, res) => {
  debug('authenticate')
  let email = req.body.email
  let pwd = req.body.password
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

module.exports.register = (req, res) => {
  debug('register')
  let name = req.body.username
  let email = req.body.email
  let pwd = req.body.password
  if (name === undefined || email === undefined || pwd === undefined) {
    return helper.response(res, false, 'Bad Request', 400)
  }

  let jsonUsuario = {
    nombre: name,
    email: email,
    clave: pwd
  }
  let usuario = new Usuario(jsonUsuario)
  usuario.save(err => {
    if (err) return helper.response(res, false, 'Internal Server Error', 500)

    helper.response(res, true, 'User register', 200)
  })
}
