'use strict';

const Lotr = require('../model/lotr');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');
const debug = require('debug')('http:route-lotr');

module.exports = function(router) {
  router.route('/lotr/:_id?')
    .get((req, res) => {
      if(req.params._id) {
        return Lotr.findById(req.params._id)
          .then(lotr => res.status(200).json(lotr))
          .catch(err => errorHandler(err, res));
      }
      return Lotr.find()
        .then(lotr => lotr.map(lotr => lotr._id))
        .then(lotr => res.status(200).json(lotr))
        .catch(err => errorHandler(err, res));
    })
    .get(bodyParser, (req, res) => {
      return Lotr.find()
        .then(lotr => res.json(lotr.map(lotr => lotr._id)))
        .catch(err => errorHandler(err, res));
    })
    .post(bodyParser, (req, res) => {
      new Lotr(req.body).save()
        .then(lotr => res.status(201).json(lotr))
        .catch(err => errorHandler(err, res));
    })
    .put(bodyParser, (req, res) => {
      return Lotr.findByIdAndUpdate(req.params._id, req.body)
        .then(() => res.sendStatus(204))
        .catch(err => errorHandler(err, res));
    })
    .delete((req, res) => {
      return Lotr.findByIdAndRemove(req.params._id)
        .then(() => res.sendStatus(204))
        .catch(err => errorHandler(err, res));
    });
};