const mongoose = require('mongoose');


const Book = mongoose.Schema({
  'summary': {String},
  'author': {String},
  'title': {String},
});

module.exports = mongoose.model('books', Book);