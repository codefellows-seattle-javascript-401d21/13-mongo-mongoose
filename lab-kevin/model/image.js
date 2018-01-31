'use strict';

const mongoose = require(mongoose);

const Image = mongoose.schema({
  'file_name': {type: 'string'},
  'file_path': {type: 'string'},
  'photographer': {type: 'string'},
  'title': {type: 'string'},
  'description': {type: 'string'},
  'location': {type: 'string'},
}, {timestamps: true});


module.exports = mongoose.model('image', Image);