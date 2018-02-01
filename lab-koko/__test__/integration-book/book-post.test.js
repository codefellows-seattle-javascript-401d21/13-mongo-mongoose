'use strict';

const server = require('../../lib/server');
const superagent = require('superagent');

describe('POST api/v1/book', () => {
  beforeAll(() => server.start());
  afterAll(() => server.stop());

  this.mockBook = {title: 'post', author:'post testing'};
  beforeAll(() => {
    return superagent.post(':4000/api/v1/book')
      .send(this.mockBook)
      .then(res => this.response = res);
  });

  describe('valid req/re', () => {
    it('should respond with a status of 201', () => {
      expect(this.response.status).toBe(201);
    });

    it('should post a new book with a title, author, and _id', () => {
      expect(this.response.body).toHaveProperty('title');
      expect(this.response.body).toHaveProperty('author');
      expect(this.response.body).toHaveProperty('_id');
    });

    it('should respond with a title of "hello" and author of "hello world"', () => {
      expect(this.response.body.title).toEqual(this.mockBook.title);
      expect(this.response.body.author).toEqual(this.mockBook.author);

    });
  });

  describe('invalid path', () => {
    it('should return a status 404 on bad path', () => {
      return superagent.post(':4000/api/v1/doesbookxist')
        .send(this.mockBook)
        .catch(err => {
          expect(err.status).toBe(404);
          expect(err.response.text).toMatch(/Path Error/i); //(/path error/ i) regex check
        });
    });

    it('should retrun a status 400 on bad request body', () => {
      return superagent.post(':4000/api/v1/book')
        .send({})
        .catch(err => expect(err.status).toBe(400));
    });
  });
});