'use strict';

// Testing Dependencies
const server = require('../lib/server');
const superagent = require('superagent');
require('jest');

// Test Variables
let port = process.env.PORT;
let api = `:${port}/api/v1/animal`;
let tempPost;
let ammend = { name: 'rabbit', species: 'cottontail'};

describe('PUT Routes', () => {
  this.mockTest = { name: 'rabbit', species: 'cottontail'};
  beforeAll(() => server.start());
  afterAll(() => server.stop());

  describe('PUT /api/v1/animal', () => {

    describe('Valid Routes/Data', () => {
      beforeAll(() => {
        return superagent.post(api)
          .send(this.mockTest)
          .then(res => tempPost = res);
      });


      it('Should respond with a status 202', () => {
        return superagent.put(`${api}/${tempPost.body._id}`)
          .send(ammend)
          .then(res => {
            expect(res.status).toBe(202);
          });
      });
      it('should check that the record was ammended', () => {
        return superagent.get(`${api}/${tempPost.body._id}`)
          .then(res => {
            expect(res.body.name).toBe('rabbit');
          });
      });



    });

    describe('Invalid Routes ', () => {
      it('Should respond a not found or path error when given an incorrect path', () => {
        return superagent.post(`:${port}/api/v1/animalia`)
          .catch(err => {
            expect(err.response.text).toMatch(/PATH/i);
          });
      });
      it('Should respond a 404 bad path when given an incorrect path', () => {
        return superagent.get(`${api}/badbunnyparameter`)
          .catch(err => {
            expect(err.status).toBe(404);
          });
      });

    });
  });
});
