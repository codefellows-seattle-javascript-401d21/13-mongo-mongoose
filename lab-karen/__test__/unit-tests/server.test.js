'use strict';

let server = require('../../lib/server');
require('jest');

describe('Server Module', () => {
  describe('Server start error', () => {
    it('should throw an error when attempting to start a server that is running', () => {
      server.start();
      return server.start()
        .catch(err => expect(err).toBeInstanceOf(Error));
    });
    server.stop();
  });

  describe('Server stop error', () => {
    it('should throw an error when attempting to stop a server that is not running', () => {
      return server.stop()
        .catch(err => expect(err).toBeInstanceOf(Error));
    });
  });
});
