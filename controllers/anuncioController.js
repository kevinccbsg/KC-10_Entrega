'use strict'
const debug = require('debug')('Nodepop:controllers:anuncioController')
// const Anuncio = require('../models/Anuncio')
const helper = require('../helpers/responseHelper')

module.exports.anunciosList = (req, res) => {
  debug('anunciosList')
  helper.response(res, true, 'Listado', 200)
}
