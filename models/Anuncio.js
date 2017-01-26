'use strict'
const mongoose = require('mongoose')

let anuncioSchema = new mongoose.Schema({
  nombre: String,
  venta: Boolean,
  precio: Number,
  foto: String,
  tags: [String]
})

anuncioSchema.statics.list = (filter, limit, skip, fields, sort, callback) => {
  const query = Anuncio.find(filter)
  query.limit(limit)
  query.skip(skip)
  query.select(fields)
  query.sort(sort)
  query.exec(callback)
}

let Anuncio = mongoose.model('anuncio', anuncioSchema)

module.exports = Anuncio
