'use strict'

const mongoose = require('mongoose')

const Animal = mongoose.Schema({
    'name': { type: String, require: true },
    'legs': { type: Number},
    'class': { type: String}
})

module.exports = mongoose.mnodel('animals', Animal)