'use strict';

const Note = require('../model/note');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');
const debug = require('debug')('http:route-note');

module.exports = function(router) {

  router.route('/note/:_id?')
    .get((req, res) => {
      debug(`${req.method}: ${req.url}`);

      if(req.params._id) {
        return Note.findById(req.params._id)
          .then(note => res.status(200).json(note))
          .catch(err => errorHandler(err, res));
      }

      return Note.find()
        .then(note => res.status(200).json(note))
        .catch(err => errorHandler(err, res));

    })

    .post(bodyParser, (req, res) => {
      new Note(req.body).save()
        .then(note => res.status(201).json(note))
        .catch(err => errorHandler(err, res));
    })

    .put(bodyParser, (req, res) =>{
      return Note.findByIdAndUpdate(req.params._id)
        .then(note => res.status(200).json(note))
        .catch(err => errorHandler(err, res));
    })

    .delete(bodyParser, (req, res) =>{
      return Note.findByIdAndRemove(req.params._id)
        .then(note => res.status(200).json(note))
        .catch(err => errorHandler(err, res));
    })
};
