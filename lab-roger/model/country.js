'use strict';

const mongoose = require('mongoose');




const Country = mongoose.Schema({
  'name': {type: String, required: true},
  'continent': {type: String},
  'language': {type: String},
  'population': {type: Number},
}, {timestamps: true});


module.exports = mongoose.model('country', Country);
