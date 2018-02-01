'use strict';

const server = require('../../lib/server.js');
const superagent = require('superagent');
require('jest');

describe('GET', function() {
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
          return superagent.post(':4000/api/v1/bike')
            .send(this.mockBikeTwo)
            .then(res => this.resTwo = res);
        });
    });

    beforeAll(() => {
      return superagent.get(':4000/api/v1/bike')
        .then(res => this.getOne = res);
    });
    afterAll(() => superagent.delete(this.resOne.body._id));
    afterAll(() => superagent.delete(this.resTwo.body._id));
    it('should return an array of ids', () => {
      this.getOne.body.map(id => {
        expect(id).toMatch(/[0-9a-z]{24}/);
      });
    });
    it('should return a status code 200', () => {
      expect(this.getOne.status).toBe(200);
    });
    it('should contain the two ids of records posted', () => {
      expect(this.getOne.body).toContain(this.resOne.body._id);
      expect(this.getOne.body).toContain(this.resTwo.body._id);
    });
  });

  describe('Invalid req/res', () => {
    it('should return a status code 400 without schema', () => {
      return superagent.get(':4000/api/v1/bike')
        .send()
        .catch(err => {
          expect(err.status).toBe(404);
        });
    });
    it('should return a 404 given an incorrect path', () => {
      return superagent.get(':4000/api/v1/doesnotexist')
        .send({title: '', content: ''})
        .catch(err => {
          expect(err.status).toBe(404);
        });
    });
  });
});