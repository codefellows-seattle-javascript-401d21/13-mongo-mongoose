'use strict';

const mongoose = require('mongoose');




const Animal = mongoose.Schema({
  'name': {type: String, required: true},
  'species': {type: String},
  'scientificName': {type: String},
}, {timestamps: true});


module.exports = mongoose.model('animal', Animal);
