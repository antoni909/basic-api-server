'use strict';
// imports
require('dotenv').config();
const server = require('./server.js');

//PORT
const PORT = process.env.PORT || 3000;

// invoke start function
server.start(PORT);
