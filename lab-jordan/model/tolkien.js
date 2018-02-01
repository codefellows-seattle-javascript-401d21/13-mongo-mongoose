'use strict'

const mongoose = require('mongoose')

const Tolkien = mongoose.Schema({
  'name': { type: String},
  'species': { type: String }
}, {timestamps: true})

module.exports = mongoose.model('tolkien', Tolkien)
