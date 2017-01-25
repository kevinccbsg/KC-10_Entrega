'use strict'
const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')
const anuncioController = require('../controllers/anuncioController')
const authHelper = require('../helpers/authHelper')

router.get('/anuncios', authHelper.isAuthenticated, anuncioController.anunciosList)
router.post('/usuarios/authenticate', usuarioController.authenticate)

module.exports = router
