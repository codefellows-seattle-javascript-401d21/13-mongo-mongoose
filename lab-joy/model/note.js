'use strict';

const mongoose = require('mongoose');

const Note = mongoose.Schema({
    'title': { type: String, require: true },
    'content': { type: String, require: true },
    'important': { type: Boolean },
}, { timestamps: true });

module.exports = mongoose.model('notes', Note);