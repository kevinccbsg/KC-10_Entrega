
const mongoDBIp = 'localhost'
const mongoDBPort = 27017
const mongoDBDatabase = 'nodepop'

module.exports = {
  processPort : 3000,
  mongoDB: {
    uri: 'mongodb://'+mongoDBIp+':'+mongoDBPort+'/'+mongoDBDatabase
  },
  dataAnuncioDB: [
    {
      "nombre": "Bicicleta",
      "venta": true,
      "precio": 230.15,
      "foto": "bici.jpg",
      "tags": [ "lifestyle", "motor"]
    },
    {
      "nombre": "iPhone 3GS",
      "venta": false,
      "precio": 50.00,
      "foto": "iphone.png",
      "tags": [ "lifestyle", "mobile"]
    },
    {
      "nombre": "iPhone 3GS",
      "venta": false,
      "precio": 50.00,
      "foto": "iphone.png",
      "tags": [ "lifestyle", "mobile"]
    },
    {
      "nombre": "iPhone 3GS",
      "venta": false,
      "precio": 50.00,
      "foto": "iphone.png",
      "tags": [ "lifestyle", "mobile"]
    }
  ],
  dataUsuarioDB: [
    {
      nombre: 'kjme',
      email: 'kevinccbsg@test.test',
      clave: 'safsdfshfd'
    },
    {
      nombre: 'kjme',
      email: 'kevinccbsg@test.test',
      clave: 'safsdfshfd'
    },
    {
      nombre: 'kjme',
      email: 'kevinccbsg@test.test',
      clave: 'safsdfshfd'
    },
    {
      nombre: 'kjme',
      email: 'kevinccbsg@test.test',
      clave: 'safsdfshfd'
    },
    {
      nombre: 'kjme',
      email: 'kevinccbsg@test.test',
      clave: 'safsdfshfd'
    },
    {
      nombre: 'kjme',
      email: 'kevinccbsg@test.test',
      clave: 'safsdfshfd'
    }
  ]
}