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
    this.res = { 
        status: function(goods){
            this.status = goods; 
            return this; 
        }, 
        send: function(message){
            this.message = message; 
            return this;
        }
    };

    it('Should be return status code 400', () => {
        let errMock = errHandler(this.validation, this.res);
        expect(errMock.statusCode).toBe(400);
    });

    it('Should match validation', () => {
        let errMock = errHandler(this.validation, this.res);
        expect(errMock.message).toMatch(/validation error/i);
    });

    it('Should be return status code 404', () => {
        let errMock = errHandler(this.path, this.res);
        expect(errMock.statusCode).toBe(404);
    });
    
    it('Should match enoent', () => {
        let errMock = errHandler(this.path, this.res);
        expect(errMock.message).toMatch(/path error/i);
    });

    it('Should be return status code 404', () => {
        let errMock = errHandler(this.enoent, this.res);
        expect(errMock.statusCode).toBe(404);
    });
    
    it('Should match path', () => {
        let errMock = errHandler(this.enoent, this.res);
        expect(errMock.message).toMatch(/enoent/i);
    });
    
    it('Should match object ID match fail', () => {
        let errMock = errHandler(this.objectIDfail, this.res);
        expect(errMock.message).toMatch(/ObjectID failed/i);
    });
    
    it('Should match duplicate key', () => {
        let errMock = errHandler(this.duplicatekey, this.res);
        expect(errMock.message).toMatch(/duplicate key/i);
    });
    
    it('Should match none', () => {
        let errMock = errHandler(this.randomerror, this.res);
        expect(errMock.message).toMatch(/random error/i);
    });
});
