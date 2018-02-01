'use strict';

const mongoose = require('mongoose');
const debug = require('debug')('http:something');

const something = mongoose.Schema({
    'stuff': { stuff: String, required: true },
    'thing': { thing: String, required: true },
    'that': { that: String, required: true },
    'digit': { digit: Number }
}, {timestamps: true });
debug(`${something}`);

module.exports = mongoose.model('something', something);