'use strict';

const server = require('../../lib/server.js');
const superagent = require('superagent');
require('jest');

describe('PUT', function() {
  this.mockBike = {year: '2010', color: 'blue', make: 'bianchi', category: 'road bike'};
  this.mockBikeTwo = {year: '2016', color: 'orange/white', make: 'novara', category: 'road bike'};
  beforeAll(server.start);
  afterAll(server.stop);

  describe('Valid req/res', () => {
  
    beforeAll(() => {
      return superagent.post(':4000/api/v1/bike')
        .send(this.mockBike)
        .then(res => {
          this.resOne = res;
        });
    });
    beforeAll(() => {
      return superagent.put(`:4000/api/v1/bike/${this.resOne.body._id}`)
        .send(this.mockBikeTwo)
        .then(res => this.putOne = res);
    });
    afterAll(() => superagent.delete(this.resOne.body._id));
    afterAll(() => superagent.delete(this.resTwo.body._id));
    it('should return a status code 204 when complete', () => {
      expect(this.putOne.status).toBe(204);
    });
    it('should have a new title', () => {
      expect(this.putOne.title).not.toBe('hello');
    });
    it('should have the same id', () => {
      expect(this.resOne._id).toBe(this.putOne._id);
    });
  });

  describe('Invalid req/res', () => {
    it('should return a status code 404 without an item', () => {
      return superagent.put(':4000/api/v1/note')
        .send()
        .catch(err => {
          // console.log(err);
          expect(err.status).toBe(404);
        });
    });
    it('should return a 404 given an incorrect path', () => {
      return superagent.get(':4000/api/v1/not')
        .send({title: '', content: ''})
        .catch(err => {
          expect(err.status).toBe(404);
        });
    });
  });
});