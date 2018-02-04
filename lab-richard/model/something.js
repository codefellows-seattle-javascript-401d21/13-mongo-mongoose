'use strict';

const mongoose = require('mongoose');
const debug = require('debug')('http:something');

const something = mongoose.Schema({
    'one': { type: String, required: true },
    'two': { type: String, required: true },
    'three': { type: String, required: true },
    'digit': { type: Number, required: true }
}, {timestamps: true });
debug(`${something}`);

module.exports = mongoose.model('something', something);