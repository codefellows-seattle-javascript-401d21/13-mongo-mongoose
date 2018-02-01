'use strict';

const mongoose = require('mongoose');

const Image = mongoose.Schema({
  'file_name': {type: String, required: true},
  'file_path': {type: String, required: true},
  'photographer': {type: String},
  'title': {type: String},
  'description': {type: String},
  'location': {type: String},
}, {timestamps: true});


module.exports = mongoose.model('image', Image);