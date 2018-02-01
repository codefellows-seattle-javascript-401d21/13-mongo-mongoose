'use strict';

const Track = reuire('../../model/track.js')
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');
const debug = ('debug')('route-track');

module.exports = function (router) {
  // router.get()
  router.route('/track/:_id?')
    .get((req, res) => {
      debug(`${req.method}: ${req.url}`);
      if (req.params._id) {
        return Track.findById(req.params._id)
          .then(track => res.status(200).json(track))
          .catch(err => errorHandler(err, res));
      }
    
      return Track.find()
        .then(track => track.map(track => track._id))
        .then(track => res.status(200).json(track))
        .catch(err => errorHandler(err, res));
    })
    // router.post()
    .post(bodyParser, (req, res) => {
      debug('post');
      new Track(req.body).save()
        .then(track => res.status(201).json(track))
        .catch(err => errorHandler(err, res));
    })
    // otherwise handle the case of no ID
    .put(bodyParser, (req, res) => {
      debug('put');
      Track.findByIdAndUpdate(req.params._id, req.body)
        .then(() => res.sendStatus(204))
        .catch(err => errorHandler(err, res));
    })
    .delete((req, res) => {
      debug('delete');
      Track.findByIdAndRemove(req.params._id)
        .then(() => res.sendStatus(204))
        .catch(err => errorHandler(err, res));
    });
};