'use strict';

const Student = require('../model/student');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');
const debug = require('debug')('http:route-student');

module.exports = (router) => {
  router.route('/student/:_id?')
    .get((req, res) => {
      debug(`#module.exports: _id: ${req.params._id}`);

      // GET call for single student
      if (req.params._id) {
        return Student.findById(req.params._id)
          .then(s => res.status(200).json(s))
          .catch(err => errorHandler(err, res));
      }

      // GET call for all students
    })
    .post(bodyParser, (req, res) => {
      new Student(req.body).save()
        .then(s => res.status(201).json(s))
        .catch(err => errorHandler(err, res));
    })
    .put()
    .delete();
};
