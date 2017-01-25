'use strict'
const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

let usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  clave: String
})

// problems with ES6 for mongoose middlewares
usuarioSchema.pre('save', function (callback) {
  let user = this

  if (!user.isModified('clave')) return callback()

  bcrypt.genSalt(5, (err, salt) => {
    if (err) return callback(err)

    bcrypt.hash(user.clave, salt, null, (err, hash) => {
      if (err) return callback(err)

      user.clave = hash
      callback()
    })
  })
})

// Method to verify password
usuarioSchema.methods.verifyPassword = function (password, callback) {
  bcrypt.compare(password, this.clave, (err, isMatch) => {
    if (err) return callback(err)

    callback(null, isMatch)
  })
}

let Usuario = mongoose.model('usuario', usuarioSchema)

module.exports = Usuario
