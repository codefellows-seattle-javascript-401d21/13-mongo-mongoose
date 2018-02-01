'use strict';

const something = require('../model/something');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');
const debug = require('debug')('http:route-something');

module.exports = function(router) {

    router.route('/something/:_id?')
        .get((req, res) => {
            debug('#GET module');
            if(req.params._id) {
                something.findById(req.params._id)
                    .then(something => res.status(200).json(something))
                    .catch(err => errorHandler(err, res));
            }

            if(!req.params._id) return res.status(404, 'something not found');
            res.json(something)
                .catch(err => errorHandler(err, res));   
        })

        .post(bodyParser, (req, res) => {
            debug('#POST module');
            new something(req.body).save()
                .then(track => res.status(201).json(track))
                .catch(err => errorHandler(err, res));
        })

        .put(bodyParser, (req, res) => {
            debug('#PUT module');
            if(req.params._id) return something.findByIdAndUpdate(req.body)
                .then(something => res.status(204).json(something))
                .catch(err => errorHandler(err, res));
            
            if(!req.params._id) return res.status(404, 'something not found');
            res.json(something)
                .catch(err => errorHandler(err, res));
        })

        .delete((req, res) => {
            debug('#DELETE module');
            something.findOneAndDelete(req.params._id)
                .then(something => res.status(204).json(something))
                .catch(err => errorHandler(err, res));
        });

};
