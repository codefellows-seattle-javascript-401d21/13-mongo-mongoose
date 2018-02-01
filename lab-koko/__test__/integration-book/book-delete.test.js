'use strict';

const server = require('../../lib/server');
const superagent = require('superagent');

describe('DELETE  api/v1/book', () => {
  beforeAll(() => server.start());
  afterAll(() => server.stop());
  
  this.postOne = { title: 'title', author: 'author' };
  this.putOne = { title: 'title2', author: 'author2' };
  beforeAll(() => {
    return superagent.post(':4000/api/v1/book')
      .send(this.postOne)
      .then(res => {
        this.responseOne = res;
        return superagent.post(':4000/api/v1/book')
          .send(this.postTwo)
          .then(res => this.responseTwo = res);
      });
  });
  describe('Valid req/res', () => {
    it('should return with a status of 204', () => {
      return superagent.delete(`:4000/api/v1/book/${this.responseTwo.body._id}`)
        .then(res => {
          expect(res.status).toBe(204);
        });
    });
    it('should check that the record was deleted', () => {
      return superagent.get(`:4000/api/v1/book/${this.responseTwo.body._id}`)
        .catch(res => {
          expect(res.status).toBe(404);
        });
    });
  });

  describe('invalid paths', () => {
    it('should return with an error of 404', () => {
      return superagent.delete(':4000/api/v1/nooooo')
        .catch(err => {
          expect(err.status).toBe(404);
        });
    });
  });
});