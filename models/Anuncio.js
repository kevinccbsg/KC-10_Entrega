'use strict';
const mongoose = require('mongoose');
 
let anuncioSchema = mongoose.Schema({
  nombre: String,venta: Boolean,
  precio: Number,
  foto: String,
  tags: [String]
});

let Anuncio = mongoose.model('anuncio', anuncioSchema);

module.exports = Anuncio;
