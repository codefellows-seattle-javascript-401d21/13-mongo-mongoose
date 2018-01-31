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
    })
    .post(bodyParser, (req, res) => {
        console.log('req.body',req.body);
        new Animal(req.body).save()
        .then(animal => res.status(201).json(animal))
        .catch(err => errorHandler(err, res))
    })
    .put(bodyParser, (req, res) => {

    })
    .delete((req, res) => {

    })
}