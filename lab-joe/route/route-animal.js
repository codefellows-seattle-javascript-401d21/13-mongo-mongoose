'use strict';

const animal = require('../model/animal');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');

module.exports = function(router) {
  router.route('/animal/:_id?')
    .get((req, res) => {

      if(req.params._id) {
        return animal.findById(req.params._id)
          .then(animal => res.status(200).json(animal))
          .catch(err => errorHandler(err, res));
      }

      return animal.find()
        .then(animal => res.status(200).json(animal))
        .catch(err => errorHandler(err, res));

    })
    .post(bodyParser, (req, res) => {
      new animal(req.body).save()
        .then(animal => res.status(201).json(animal))
        .catch(err => errorHandler(err, res));

    })
    .put(bodyParser, (req, res) => {
      return animal.findByIdAndUpdate(req.params._id, req.body)
        .then(() => res.status(202).end())
        .catch(err => errorHandler(err, res));


    })
    .delete((req, res) => {
      return animal.findByIdAndRemove(req.params._id)
        .then(() => res.status(204).end())
        .catch(err => errorHandler(err, res));
    });



};
