'use strict';

const eHandler = require('../../lib/error-handler');
require('jest');

describe('#error-handler', () => {
    this.validation = new Error('Validation Error');
    this.patherr = new Error('Path Error');
    this.enoent = new Error('ENOENT');
    this.fail = new Error('Failed');
    this.objectid = new Error('ObjectID failed');
    this.duplicate = new Error('Duplicate Error');
    this.res = { status: function(goods){this.status = goods; return this; }, send: function(message){this.message = message; return this;}};

    it('should return status 400', () => {
        let mockErr = eHandler(this.validation, this.res);
        expect(mockErr.status).toBe(400);
    });

    it('should return validation error', () => {
        let mockErr = eHandler(this.validation, this.res);
        expect(mockErr.message).toMatch(/Validation Error/i);
    });

    // it('should return status 400', () => {
    //     let mockErr = eHandler(this.validation, this.res);
    //     expect(mockErr.status).toBe(400);
    // });

    // it('should return status 400', () => {
    //     let mockErr = eHandler(this.validation, this.res);
    //     expect(mockErr.status).toBe(400);
    // });

    // it('should return status 400', () => {
    //     let mockErr = eHandler(this.validation, this.res);
    //     expect(mockErr.status).toBe(400);
    // });

    // it('should return status 400', () => {
    //     let mockErr = eHandler(this.validation, this.res);
    //     expect(mockErr.status).toBe(400);
    // });
});