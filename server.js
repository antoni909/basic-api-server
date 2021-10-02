
'use strict';
// can import dependencies
const express = require('express');
// initialize
const app = express();

//app.use(express.json()) preparses json

// Middleware Imports
const logger = require('./src/middleware/logger');
const validator = require('./src/middleware/validator');
const notFoundHandler = require('./src/error-handlers/404');
const serverErrorHandler = require('./src/error-handlers/500');

// App level middleware
app.use(logger); 

// Route
app.get('/person', validator ,(req,res) => {
  console.log('served res');
  let person = {
    name: req.query.name
  }
  res.status(200).send(person);
});

// Post Routes Error Handling Middleware
app.use(notFoundHandler);
app.use(serverErrorHandler);

// export server
module.exports = {
  app: app,
  start: port => {
    if(!port){throw new Error('missing PORT')};
    app.listen(port, () => {
      console.log(`server listening PORT: ${port}`);
    });
  },
};
