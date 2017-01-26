
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
      nombre: "Chair",
      venta: true,
      precio: 10.15,
      foto: "chair.jpg",
      tags: [ "home", "Decoration"]
    },
    {
      nombre: "Drone",
      venta: true,
      precio: 500.00,
      foto: "drone.jpg",
      tags: [ "Entretaiment", "games", "Remote control"]
    },
    {
      nombre: "Playstation 4",
      venta: false,
      precio: 200.00,
      foto: "play4.png",
      tags: [ "home", "Entretaiment", "games"]
    },
    {
      nombre: "Tablet",
      venta: true,
      precio: 550.00,
      foto: "table.jpg",
      tags: [ "lifestyle", "mobile"]
    },
    {
      nombre: "xbox 360",
      venta: true,
      precio: 360.00,
      foto: "xbox360.jpg",
      tags: [ "home", "Entretaiment", "games"]
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