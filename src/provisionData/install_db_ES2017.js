'use strict'
require('./helpers/connectionHelper')
const Anuncio = require('./models/Anuncio')
const Usuario = require('./models/Usuario')
const config = require('app-config')

let dataAnuncioDB = config.config.dataAnuncioDB
let dataAnuncioDBLen = config.config.dataAnuncioDB.length
let dataUsuarioDB = config.config.dataUsuarioDB
let dataUsuarioDBLen = config.config.dataUsuarioDB.length

function saveAnuncioDDBB(data) {
  return new Promise((resolve, reject) => {
    let anuncio = new Anuncio(data)
    anuncio.save(err => {
      if (err) return reject()
      resolve('anuncio saved')
    })
  })
}

function saveUsuarioDDBB(data) {
  return new Promise((resolve, reject) => {
    let usuario = new Usuario(data)
    usuario.save(err => {
      if (err) return reject()
      resolve('usuario saved')
    })
  })
}

function deleteAllAnuncios() {
  return new Promise((resolve, reject) => {
    Anuncio.remove({}, err => {
      if (err) return reject()
      resolve('deleted all')
    })
  })
}

function deleteAllUsers() {
  return new Promise((resolve, reject) => {
    Usuario.remove({}, err => {
      if (err) return reject()
      resolve('deleted all')
    })
  })
}

async function provisionAnunciosDDBB() {
  while(dataAnuncioDBLen--) {
    let response = await saveAnuncioDDBB(dataAnuncioDB[dataAnuncioDBLen])
    console.log(response)
  }
  return 'finish and saved'
}

async function provisionUsuariosDDBB() {
  while(dataUsuarioDBLen--) {
    let response = await saveUsuarioDDBB(dataUsuarioDB[dataUsuarioDBLen])
    console.log(response)
  }
  return 'finish and saved'
}

deleteAllAnuncios()
.then(deleteAllUsers)
.then(provisionAnunciosDDBB)
.then(provisionUsuariosDDBB)
.then(msg => {
  console.log(msg)
  process.exit(0)
}, error => {
  console.log('An error ocured', error)
  process.exit(1)
})