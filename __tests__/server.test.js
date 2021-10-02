'use strict';

const supertest = require('supertest');
const server = require('../server.js');
const request = supertest(server.app);
                // spins up server on port 3000
// code fellows repo class-01/demo
/* 
Assert the following
404 on a bad route
404 on a bad method
500 if no name in the query string
200 if the name is in the query string
given an name in the query string, the output object is correct
*/

// super test copies server and makes requests

describe('API server', () => {

  it('404 on a bad route', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });

  it('404 on a bad method', async () => {
    const response = await request.patch('/person');
    expect(response.status).toEqual(404);
  });

  it('500 if no name in the query string', async () => {
    const response = await request.get('/person/?name=');
    expect(response.status).toEqual(500);
    // expect(response.body.route).toEqual('/bad');
  });

  // will look for: name=lorenzo
  it('200 if the name is in the query string', async () => {
    const response = await request.get('/person/?name=lorenzo');
    expect(response.status).toEqual(200);
  });

});
