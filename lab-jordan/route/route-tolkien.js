'use strict'

const Tolkien = require('../model/tolkien')
const bodyParser = require('body-parser').json()
const errorHandler = require('../lib/error-handler')

module.exports = function(router) {

  router.route('/tolkien/:_id?')
  .get((req, res) => {
    if (req.params._id) {
      return Tolkien.findById(req.params._id)
      .then(tolkien => res.status(200).json(tolkien))
      .catch(err => errorHandler(err, res))
    }
    return Tolkien.find()
    .then(tolkien => tolkien.map(tolkien => tolkien._id))
    .then(tolkien => res.status(200).json(tolkien))
    .catch(err => errorHandler(err, res));
  })
  .post(bodyParser, (req, res) => {
    new Tolkien(req.body).save()
    .then(tolkien => res.status(201).json(tolkien))
    .catch(err => errorHandler(err, res))
  })
  .put(bodyParser, (req, res) => {
    return Tolkien.findByIdAndUpdate(req.params._id, req.body)
    .then(() => res.sendStatus(204))
    .catch(err => errorHandler(err, res));
  })
  .delete((req, res) => {
    return Tolkien.findByIdAndRemove(req.params._id)
    .then(() => res.sendStatus(204))
    .catch(err => errorHandler(err, res));
  });
};
