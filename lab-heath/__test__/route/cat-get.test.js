'use strict';

const server = require('../../lib/server');
const superagent = require('superagent');
require('jest');


describe('GET /api/v1/cat', function () {
  beforeAll(() => server.start());
  afterAll(() => server.stop());

  
  this.mockCat = {name: 'bill', color: 'grey', age: 34};
  this.mockCat2 = {name: 'heath', color: 'grey', age: 34};
  
  beforeAll(() => {
    return superagent.post(':4000/api/v1/cat/')
      .send(this.mockCat)
      .then(() => {
        return superagent.post(':4000/api/v1/cat/')
          .send(this.mockCat2)
          .then(res => {
            this.response = res;
          });
      });
  });

  describe('Valid req/res for GET ALL', () => {
    beforeAll(() => {
      return superagent.get(':4000/api/v1/cat')
        .then(res => this.response = res);
    });

    it('should respond with a status of 200', () => {
      expect(this.response.status).toBe(200);
    });
    it('should get an array of 2 items and have ids to match', () => {
      expect(this.response.body[0]).toMatch(/[0-9a-f]{24}/);
    });
    it('should respond with array lengthn of 2 or more', () => {
      expect(this.response.body.length).toBeGreaterThanOrEqual(2);
    });
  });


  describe('Valid req/res GET ONE', () => {
    let temp;
    beforeAll(() => {
      return superagent.post(':4000/api/v1/cat/')
        .send(this.mockCat)
        .then(res => {
          temp = res.body;
          this.response = res;
        })
        .then(() => {
          return superagent.get(`:4000/api/v1/cat/${temp._id}`)
            .then(res => this.response = res);
        });
    });

    it('should respond with a status of 200', () => {
      expect(this.response.status).toBe(200);
    });
    it('should get an item back and the title and content to match', () => {
      expect(temp.name).toMatch(/bill/);
      expect(temp.color).toMatch(/grey/);
    });
    it('should get an item back and have these properties', () => {
      expect(temp).toHaveProperty('name');
      expect(temp).toHaveProperty('color');
      expect(temp).toHaveProperty('age');
    });
  });

  describe('invalid req/res GET ONE', () => {
    beforeAll(() => {
      return superagent.post(':4000/api/v1/cat/')
        .send(this.mockCat)
        .then(res => this.response = res)
        .then(() => {
          return superagent.get(`:4000/api/v1/cat/asdf`)
            .catch(err => this.res = err);
        });
    });

    it('should respond with a status of 404', () => {
      expect(this.res.status).toBe(404);
    });
  });

  describe('invalid req/res GET ALL', () => {
    beforeAll(() => {
      return superagent.post(':4000/api/v1/cat/')
        .send(this.mockCat)
        .then(res => this.response = res)
        .then(() => {
          return superagent.get(`:4000/api/v1/no`)
            .catch(err => this.res = err);
        });
    });

    it('should respond with a status of 404', () => {
      expect(this.res.status).toBe(404);
    });
  });
});