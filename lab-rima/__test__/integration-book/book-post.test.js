'use strict';

const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), '__test__/.test.env')});
const server = require('../../lib/server');
const superagent = require('superagent');



describe('POST /api/v1/book', () => {

  beforeAll(() => server.start());
  afterAll(() => server.stop());

  let resOne;

  describe('Valid req/res', () => {

    // create a new book to use it in test
    beforeAll(() => {
      return superagent.post(`:${process.env.PORT}/api/v1/book`)
        .send({title: 'Test', author: 'Testing'})
        .then(res => resOne = res);
    });

    test(
      'should create a new book',
      () => {
        expect(resOne.body.title).toEqual('Test');
        expect(resOne.body.author).toEqual('Testing');
      });

    test(
      'should respond with http res status 201',
      () => {
        expect(resOne.status).toBe(201);
      });

    test(
      'should have an _id property on the response object',
      () => {
        expect(resOne.body).toHaveProperty('_id');
      });
  });

  describe('Invalid req/res', () => {

    test(
      'should not accept invalid input',
      () => {
        superagent.post(`:${process.env.PORT}/api/v1/book`)
          .ok(res => res.status < 500)
          .send({author: 'au'})
          .catch(err => expect(err.status).not.toBe(201));
      });

  });
});
