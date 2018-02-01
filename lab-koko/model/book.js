'use strict';

const mongoose = require('mongoose');

const Book = mongoose.Schema({
  'summary': { type: String },
  'genre': {type: String},
  'author' : { type: String, require: true },
  'title': { type: String, require: true },
}, {timestamps: true});

module.exports = mongoose.model('book', Book);
