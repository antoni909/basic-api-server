'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
// before tests run initialize the db
const data = require('../src/models/index')
const request = supertest(server.app);
                // spins up server on port 3000

// supertest copies server and makes requests

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

describe('testing successfule runs on /food route handlers', ()=> {

  test('testing a 200 for GET /food', async ()=> {
    const response = await server.get('/food');
    expect(response.status).toBe(200);
  });
  test('testing a 200 for POST /food', async ()=> {
    const response = await server.post('/food');
    expect(response.status).toBe(200);
  });
  test('testing a 200 for PUT /food', async ()=> {
    const response = await server.put('/food');
    expect(response.status).toBe(200);
  });
  test('testing a 200 for DELETE /food', async ()=> {
    const response = await server.delete('/food');
    expect(response.status).toBe(200);
  });

});
