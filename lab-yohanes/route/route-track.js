'use strict'

const Track = require('../model/track')
const bodyParser = require('body-parser').json()
const errorHandler = require('../lib/error-handler')

module.exports = function (router) {
  router.route('/track/:_id?')
  .get((req, res) => { //same thing as routter.get() and router.post()

    if (req.params._id) {
      return Track.findById(req.params._id)
        .then(track => res.status(200).json(track)) //'track' is just calling back to avoid linter. then stringifying the tracked data from database
        .catch(err => errorHandler(err, res))
     }
    //else if (!req.params._id) {
    //   return Track.find(schema) //return all
    // }
    //other wise if no ID...

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
    return Track.findByIdAndUpdate(req.params._id)
    .then(track => res.status(202).json(track))
    .catch(err => errorHandler(err, res))

  })
  .delete((req, res) => {
    console.log('DELETE', req.params._id)
    if (req.params._id) {
      return Track.findByIdAndRemove(req.params._id)
      .then(data => res.status(202).json(data))
      .catch(err => errorHandler(err, res))
    }
  })
}