'use strict';

let eH = require('../../lib/error-handler');
require('jest');

describe('testing dummy', function () {
  it('should return true', () => expect(true).toBeTruthy());
});

class Res {
  constructor (err) {
    this.error = err,
    this.code = null;
    this.message = null;
  }

  status Code {
    this.code = code;
    return this;
  }

  send (code) {
    this.message = message;
    return this;
  }
}

let enoent = new Res(new Error('ENOENT'))
