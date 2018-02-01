'use strict';

const server = require('../../lib/server');
const superagent = require('superagent');

describe('PUT api/v1/note', () => {

  beforeAll(() => server.start());
  afterAll(() => server.stop());

  this.postOne = {title: 'title', author: 'author'};
  this.putOne = {title: 'title2', author: 'author2'};
  
  beforeAll(() => {
    return superagent.post(':4000/api/v1/book')
      .send(this.postOne)
      .then(res => {
        this.response = res;
        return superagent.put(`:4000/api/v1/book/${this.response.body._id}`)
          .send(this.putOne)
          .then(res => {
            this.responseTwo = res;
            return superagent.get(`:4000/api/v1/book/${this.response.body._id}`)
              .then(res => this.responseThree = res);
          });
      });
  });
  it('should respond with a status code of 204', () => {
    expect(this.responseTwo.status).toBe(204);
  });
  it('should respond with an error of 404', () => {
    return superagent.put(':4000/api/v1/DoesNotExist')
      .send(this.putOne)
      .catch(err => {
        expect(err.status).toBe(404);
      });
  });
});