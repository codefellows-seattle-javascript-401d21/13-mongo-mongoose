'use strict';

const server = require('../../lib/server');
require('jest');

describe('server testing', function() {
  it('pseudo test', () => {
    expect(true).toBeTruthy();
  });
  // it('Should return an err starting twice', () => {
  //   server.start();
  //   expect(server.start()).toBeInstanceOf(Error);
  //   server.stop();
  // });

  // it('Should return an err stopping twice', () => {
  //   server.start();
  //   server.stop();
  //   expect(server.stop()).toBeInstanceOf(Error);
  // });
});