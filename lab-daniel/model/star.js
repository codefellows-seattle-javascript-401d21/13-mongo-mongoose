'use strict';

const mongoose = require('mongoose');

const Star = mongoose.Schema({
  starName: {type: String, required: true},
  id: {type: Number},
  mass: {type: Number},
  diameter: {type: Number},
  galX: {type: Number},
  galY: {type: Number},
  galZ: {type: Number},
  dist: {type: Number},
  starType: {type: String},
  temp: {type: Number},
  color: {type: Number},

});

module.exports = mongoose.model('stars', Star);