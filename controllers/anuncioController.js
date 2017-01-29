'use strict'
const debug = require('debug')('Nodepop:controllers:anuncioController')
const Anuncio = require('../models/Anuncio')
const helper = require('../helpers/responseHelper')

module.exports.anunciosList = (req, res) => {
  debug('anunciosList')
  let queryParams = req.query
  let precioStart, precioEnd
  let filter = {}
  let tag = queryParams.tag
  if (tag) {
    filter.tags = tag
  }
  let nombre = queryParams.nombre
  if (nombre) {
    filter.nombre = new RegExp('^' + nombre, 'i')
  }
  let precio = queryParams.precio
  if (precio) {
    debug('has price')
    precioStart = precio.split('-')[0]
    precioEnd = precio.split('-')[1]
  }
  if (precioStart === '') {
    let numberPE = Number(precioEnd)
    debug(res.__('Error 400'))
    if (isNaN(numberPE)) return helper.response(res, false, res.__('Error 400'), 404)

    filter.precio = { '$lte': numberPE }
  } else if (precioEnd === '') {
    let numberPS = Number(precioStart)
    debug(res.__('Error 400'))
    if (isNaN(numberPS)) return helper.response(res, false, res.__('Error 400'), 404)

    filter.precio = { '$gte': numberPS }
  } else {
    debug('else')
    let numberPE = Number(precioEnd)
    let numberPS = Number(precioStart)
    debug(numberPS)
    debug(isNaN(numberPS))
    debug(res.__('Error 400'))
    if (isNaN(numberPS) || isNaN(numberPE)) return helper.response(res, false, res.__('Error 400'), 404)

    filter.precio = { '$lte': numberPE, '$gte': numberPS }
  }
  let venta = (queryParams.venta === 'true') ? Boolean(queryParams.venta) : false
  filter.venta = venta
  let start = Number(queryParams.start) || 0
  let limit = Number(queryParams.limit) || 5
  if (isNaN(start) || isNaN(limit)) {
    debug(res.__('Error 400'))
    return helper.response(res, false, res.__('Error 400'), 404)
  }
  let sort = queryParams.sort
  debug(filter)
  debug(limit)
  debug(start)
  debug(sort)
  Anuncio.count(filter, (err, count) => {
    if (err) return helper.response(res, false, res.__('Error 500'), 500)
    Anuncio.list(filter, limit, start, sort, (err, anuncios) => {
      if (err) return helper.response(res, false, res.__('Error 500'), 500)

      if (anuncios.length === 0) return helper.response(res, false, res.__('Error 404'), 404)

      let formated = { page: start, total: count, perPage: limit, data: anuncios }
      helper.response(res, true, formated, 200)
    })
  })
}
