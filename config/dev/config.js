
const mongoDBIp = 'localhost'
const mongoDBPort = 27017
const mongoDBDatabase = 'nodepop'

module.exports = {
  processPort : 3000,
  mongoDB: {
    uri: 'mongodb://'+mongoDBIp+':'+mongoDBPort+'/'+mongoDBDatabase
  },
  optsAuth: {
    secretOrKey: 'nodepopissecretdude'
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
      nombre: 'nodeadmin',
      email: 'nodeadmin@test.test',
      clave: 'nodeadmissuper'
    },
    {
      nombre: 'kevinccbsg',
      email: 'kevinccbsg@test.test',
      clave: 'supersegura'
    },
    {
      nombre: 'github',
      email: 'github@test.test',
      clave: 'gatopulpo'
    },
    {
      nombre: 'keepcoding',
      email: 'keepcoding@test.test',
      clave: 'keepcoding1234'
    }
  ]
}