'use strict'

const mongoose = require('mongoose')

const Animal = mongoose.Schema({
    'name': { type: String, required: true },
    'legs': { type: Number},
    'class': { type: String}
})

module.exports = mongoose.model('animals', Animal)