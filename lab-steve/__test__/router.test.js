'use strict';

const superagent = require('superagent');
const server = require('../lib/server');
require('jest');
const PORT = process.env.PORT;

describe('Route-student module', function() {
  this.ep = `:${PORT}/api/v1`;
  // Start the server
  beforeAll(() => server.start(process.env.PORT, (err) => {
    if (err) {
      console.error(`Error Starting Server: ${err}`);
      return;
    }
    console.log(`Listening on PORT ${process.env.PORT}`);
  }));
  // Stop the server
  afterAll(() => server.stop());

  describe('Invalid GET request using fakepath', () => {
    describe('GET /fakepath', () => {
      it('should respond with 404 status', () => {
        return superagent.get(`${this.ep}/fakepath`)
          .catch(err => expect(err.status).toBe(404));
      });
    });
  });
});
