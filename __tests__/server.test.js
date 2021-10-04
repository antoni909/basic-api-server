'use strict';

require('dotenv').config();

const server = require('../src/server.js');
const { db } = require('../src/models/index')
const supertest = require('supertest');
const request = supertest(server.app);

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

// Create a record using POST
// Read a list of records using GET
// Read a record using GET
// Update a record using PUT
// Destroy a record using DELETE

describe('web server', () => {

  // These tests are wired with async/await --- so much cleaner!
  it('should respond with a 404 on an invalid method', async () => {
    const response = await request.put('/hello');
    expect(response.status).toBe(404);
  });

  it('can add a record', async () => {
    const response = await request.post('/food').send({
      name: 'test',
      calories: 100
    })
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
    expect(response.body.calories).toEqual(100);
  });

  it('can get a list of records', async () => {
    const response = await request.get('/food');
    expect(response.status).toEqual(200);
    expect(response.body).toBeTruthy();
    // find a way to expect an arr of objs
  });

  it('can get a record', async () => {
    const response = await request.get('/food/1');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test')
  });

  // it('can update a record', async () => {

  // });

  it('can delete a record', async () => {
      const response = await request.delete('./food/1');
      expect(response.status).toBe(204);
  });
});
