'use strict'

const Track = require('../model/track')
const bodyParser = require('body-parser')
const errorHandler = require('../lib/error-handler')

module.exports = function (reouter) {
  router.route('/track/:_id?')//same thing as routter.get() and router.post()
    .get((req, res) => {
      if (req.params._id) {
        Track.findById(req.params._id)
          .then(track = res.status(200).json(track)) //'track' is just calling back to avoid linter. then stringifying the tracked data from database
          .catch(err => errorHandler(err, res))
      }
    })
    .post(bodyParser, (req, res) => { //always have to parse updated files
      //req.body.title, req.body.content must be passed in here
      //let tarck = {}
      // let {title, artist}
      new Track(req.body).save() //This is our SCHEMA. Must save to update mongo database
        .then(track => res.status(201).json(track))
        .catch(err => errorHandler(err, res))
    })
    .put(bodyParser, (req, res) => { //always have to parse updated files

    })
    .delte((req, res) => {

    })
}