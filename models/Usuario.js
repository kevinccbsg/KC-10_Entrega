'use strict'
const mongoose = require('mongoose')

let usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  clave: String
})

let Usuario = mongoose.model('usuario', usuarioSchema)

module.exports = Usuario
