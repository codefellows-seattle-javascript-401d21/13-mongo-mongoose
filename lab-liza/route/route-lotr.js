'use strict';

const Lotr = require('../model/lotr');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');

module.exports = function(router) {
  router.route('/lotr/:_id?')
    .get((req, res) => {
      if(req.params._id) {
        return Lotr.findById(req.params._id)
          .then(lotr => res.status(200).json(lotr))
          .catch(err => errorHandler(err, res));
      }

    // otherwise handle the case of no ID

    })
    .post(bodyParser, (req, res) => {
      new Lotr(req.body).save()
        .then(lotr => res.status(201).json(lotr))
        .catch(err => errorHandler(err, res));
    })
    .put(bodyParser, (req, res) => {

    })
    .delete((req, res) => {

    });
};