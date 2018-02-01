'use strict';

const unitTest = require('../../lib/error-handler');
const Track = require('../../model/track.js');
require('jest');


this.validation = new Error('Validation Error!');
this.fail = new Error('Failure Error!');
this.enoent = new Error('Enoent Error!');
this.objectId = new Error('Object ID Error!');
this.duplicate = new Error('Duplicate Error!');
this.path_error = new Error('Path Error!');


describe('.....', () => {
  describe('.....', () => {
    it('should respond with a status of 200, for a valid body', () => {
      expect().toEqual(200);
    });
    describe('.....', () => {
      it('should respond with a status of 200, for a updated body', () => {
        expect().toEqual(200);
      });
      describe('.....', () => {
        it('should respond with a status of 400, for a bad request if no body was provided', () => {
          expect().toEqual(400);
        });
        describe('.....', () => {
          it('should respond with a status of 400, for bad request of no body was provided', () => {
            expect().toEqual(400);
          });
          describe('.....', () => {
            it('should respond with a status of 404, not found, for valid requests made with an id that was not found', () => {
              expect().toEqual(404);
            });
          });
        });
      });
    });
  });
});