'use strict'

const Mc = require('../model/mc')
const bodyParser = require('body-parser').json()
const errorHandler = require('../lib/error-handler')

module.exports = function(router) {
  // router.get()
  // router.post()

  // Below is another example of mounting route methods to the router
  router.route('/mc/:_id?')
    .get((req, res) => {
    // debug(`${req.method}: ${req.url}`)

      if(req.params._id) {
        return Mc.findById(req.params._id)
          .then(mc => res.status(200).json(mc))
          .catch(err => errorHandler(err, res))
      }

    // otherwise handle the case of no ID

    })
    .post(bodyParser, (req, res) => {
      new Mc(req.body).save()
        .then(mc => res.status(201).json(mc))
        .catch(err => errorHandler(err, res))
    })
    .put(bodyParser, (req, res) => {

    })
    .delete((req, res) => {

    })
}