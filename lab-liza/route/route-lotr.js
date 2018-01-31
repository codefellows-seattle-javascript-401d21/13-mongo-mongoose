'use strict';

const LOTR = require('../model/lotr');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');

module.exports = function(router) {
  // router.get()
  // router.post()

  // Below is another example of mounting route methods to the router
  router.route('/lotr/:_id?')
    .get((req, res) => {
    // debug(`${req.method}: ${req.url}`)

      if(req.params._id) {
        return LOTR.findById(req.params._id)
          .then(lotr => res.status(200).json(lotr))
          .catch(err => errorHandler(err, res));
      }

    // otherwise handle the case of no ID

    })
    .post(bodyParser, (req, res) => {
      new LOTR(req.body).save()
        .then(lotr => res.status(201).json(lotr))
        .catch(err => errorHandler(err, res));
    })
    .put(bodyParser, (req, res) => {

    })
    .delete((req, res) => {

    });
};