'use strict';

const mongoose = require('mongoose');

const Bike = mongoose.Schema({
  'year': {type: Number},
  'color': {type: String},
  'make': {type: String},
  'category': {type: String},
}, {timestamps: true});

module.exports = mongoose.model('bikes', Bike);