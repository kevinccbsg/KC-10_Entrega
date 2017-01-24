
const mongoDBIp = 'localhost';
const mongoDBPort = 27017;
const mongoDBDatabase = 'video';

module.exports = {
  processPort : 3000,
  mongoDB: {
    uri: 'mongodb://'+mongoDBIp+':'+mongoDBPort+'/'+mongoDBDatabase
  }
};