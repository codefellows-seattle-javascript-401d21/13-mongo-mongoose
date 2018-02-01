'use strict';

const mongoose = require('mongoose');

const Book = mongoose.Schema({
  'title' : { type: String, require: true },
  'author': { type: String, require: true },
  'page_number' : { type: Number },
  'language': { type: String },
  'publish_date': { type: String },
}, { timestamps: true });

module.exports = mongoose.model('books', Book);
