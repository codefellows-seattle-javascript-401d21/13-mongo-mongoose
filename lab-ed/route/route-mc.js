'use strict'

const Mc = require('../model/mc')
const bodyParser = require('body-parser').json()
const errorHandler = require('../lib/error-handler')
const debug = require('debug')('http:Router')

module.exports = function(router) {
  
  router.route('/mc/:_id?')

    .get((req, res) => {
      debug(`${req.method}: ${req.url}`)

      if(req.params._id) {
        return Mc.findById(req.params._id)
          .then(mc => res.status(200).json(mc))
          .catch(err => errorHandler(err, res))
      } else {
        return Mc.find()
          .then(mc => res.status(200).json(mc))
          .catch(err => errorHandler(err, res))
      }
    })

    .post(bodyParser, (req, res) => {
      return new Mc(req.body).save()
        .then(mc => res.status(201).json(mc)) 
        .catch(err => errorHandler(err, res))
    })

  router.route('/mc/:_id?')
    .put(bodyParser, (req, res) => {
      return Mc.findByIdAndUpdate(req.params._id, req.body)
        .then(mc => res.status(204).json(mc)) 
        .catch(err => errorHandler(err, res))
    })

  router.route('/mc/:_id?')
    .delete((req, res) => {
      Mc.findByIdAndRemove(req.params._id)
        .then(mc => res.status(204).json(mc)) 
        .catch(err => errorHandler(err, res))
    })
}