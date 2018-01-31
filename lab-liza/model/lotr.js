'use strict';

const mongoose = require('mongoose');

const LOTR = mongoose.Schema({
  'name': { type: String },
  'species': { type: String },
  'aliases' : { type: String },
  'age' : { type: Boolean },
  'evil' : { type: Boolean },
  'living': { type: Boolean },
}, {timestamps: true});

module.exports = mongoose.model('lotr', LOTR);