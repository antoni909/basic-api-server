'use strict';
// imports
require('dotenv').config();
const server = require('./src/server.js');
//PORT
const PORT = process.env.PORT || 3001;

const { db } = require('./src/models/index.js')

// sync db-server with server
db.sync()
  .then(()=> { server.start(PORT)})
  .catch(console.error);
