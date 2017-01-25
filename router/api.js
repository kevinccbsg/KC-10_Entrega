'use strict'
const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')
const anuncioController = require('../controllers/anuncioController')

router.get('/', anuncioController.anunciosList)
router.post('/usuarios/authenticate', usuarioController.authenticate)

module.exports = router
