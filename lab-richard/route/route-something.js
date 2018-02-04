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

            something.find()
                .then(somethings => somethings.map(t => t._id))
                .then(ids => res.status(200).json(ids))
                .catch(err => errorHandler(err, res));
        })

        .post(bodyParser, (req, res) => {
            debug('#POST module');
            new something(req.body).save()
                .then(something => res.status(201).json(something))
                .catch(err => errorHandler(err, res));
        })

        .put(bodyParser, (req, res) => {
            debug('#PUT module');
            something.findByIdAndUpdate(req.params._id, req.body, {upsert: true, runValidators: true, new: true})
                .then(something => res.status(204).json(something))
                .catch(err => errorHandler(err, res));
        })

        .delete((req, res) => {
            debug('#DELETE module');
            something.findOneAndDelete(req.params._id)
                .then(() => res.status(204))
                .catch(err => errorHandler(err, res));
        });

};
