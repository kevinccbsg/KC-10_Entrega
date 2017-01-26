'use strict'
const debug = require('debug')('Nodepop:controllers:anuncioController')
// const Anuncio = require('../models/Anuncio')
const helper = require('../helpers/responseHelper')

module.exports.anunciosList = (req, res) => {
  debug('anunciosList')
  let tag = req.query.tag
  let nombre = req.query.nombre
  let precio = req.query.precio
  let start = req.query.start
  let limit = req.query.limit
  let sort = req.query.sort
  let includeTotal = req.query.includeTotal
  helper.response(res, true, 'Listado', 200)
}
