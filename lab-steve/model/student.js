'use strict';

const mongoose = require('mongoose');

const Student = mongoose.Schema({
  'full_name': {type: String, require: true},
  'student_id': String,
  'age': Number,
  'campus': String,
}, {timestamps: true});

module.exports = mongoose.model('students', Student);

