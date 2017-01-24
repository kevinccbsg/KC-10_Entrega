'use strict';
// mongoose connections
const debug         = require('debug')('Nodepop:helpers:connectionHelper');
const config        = require('app-config');
const mongoose      = require('mongoose');
const conn          = mongoose.connection;
mongoose.Promise = global.Promise;

//mongoose handling connections
conn.on('error', (err) => {
  debug('Error de conexión:', err);
});

conn.once('open', () => {
  debug('Connected to mongodb.');
});

// mongoose connect
mongoose.connect(config.config.mongoDB.uri);