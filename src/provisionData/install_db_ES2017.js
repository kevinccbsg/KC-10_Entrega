'use strict';
require('./helpers/connectionHelper');
const Anuncio = require('./models/Anuncio');
const config = require('app-config');

let dataDB = config.config.dataDB;
let dataDBLen = config.config.dataDB.length;

function saveAnuncioDDBB(data) {
  return new Promise((resolve, reject) => {
    let anuncio = new Anuncio(data);
    anuncio.save((err) => {
      if (err) return reject();
      resolve('saved');
    });
  });
}

async function provisionDDBB() {
  while(dataDBLen--) {
    let response = await saveAnuncioDDBB(dataDB[dataDBLen]);
    console.log(response);
  }
  return 'finish and saved';
}

provisionDDBB()
.then(msg => {
  console.log(msg);
  process.exit(0);
}, error => {
  console.log('An error ocured', error);
  process.exit(1);
});