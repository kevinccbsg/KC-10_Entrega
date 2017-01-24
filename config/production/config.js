
const mongoDBIp = 'localhost';
const mongoDBPort = 27017;
const mongoDBDatabase = 'nodepop';

module.exports = {
  processPort : 3000,
  mongoDB: {
    uri: 'mongodb://'+mongoDBIp+':'+mongoDBPort+'/'+mongoDBDatabase
  }
};