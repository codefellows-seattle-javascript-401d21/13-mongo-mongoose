'use strict'

const Animal = require('../model/animal')
const bodyParser = require('body-parser').json()
const errorHandler = require('../lib/error-handler')

module.exports = function(router) {
    router.route('/animal/:_id?')
    .get((req, res) => {

        if(req.params._id) {
            return Animal.findById(req.params._id)
            .then(animal => res.status(200).json(animal))
            .catch(err => errorHandler(err,res))
        }
        return Animal.find()
            .then(animals => animals.map(a => a._id))
            .then(animal => res.status(200).json(animal))
            .catch(err => errorHandler(err,res))
    })
    .post(bodyParser, (req, res) => {
        // if(!req.body) throw new Error('Validation Error. Cannot create animal. response body required')
         new Animal(req.body).save()
        .then(animal => res.status(201).json(animal))
        .catch(err => errorHandler(err, res))
    })
    .put(bodyParser, (req, res) => {
        return Animal.findByIdAndUpdate(req.params._id, req.body)
            .then(() => res.sendStatus(204))
            .catch(err => errorHandler(err, res))

    })
    .delete((req, res) => {
        return Animal.findByIdAndRemove(req.params._id)
            .then(() => res.status(204).end())
            .catch(err => errorHandler(err,res))
    })
}