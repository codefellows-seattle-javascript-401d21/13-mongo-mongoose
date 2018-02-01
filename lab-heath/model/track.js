'use strict';

const mongoose = require('mongoose');

const Cat = mongoose.Schema({
  'age': { type: Number },
  'color' : { type: String, required: true },
  'name': { type: String, required: true },
}, {timestamps: true});

module.exports = mongoose.model('cat', Cat);