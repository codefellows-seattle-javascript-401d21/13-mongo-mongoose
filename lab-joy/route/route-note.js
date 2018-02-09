'use strict';

const Note = require('../model/note');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');

module.exports = router => {
    router.route('/note/:_id?')
        .get((req, res) => {
            if (req.params._id) {
                return Note.findById(req.params._id)
                    .then(note => res.status(200).json(note))
                    .catch(err => errorHandler(err, res));
            }
        })

        .post(bodyParser, (req, res) => {
            new Note(req.body).save()
                .then(note => res.status(201).json(note))
                .then(err => errorHandler(err, res));
        })

        .put(bodyParser, (req, res) => { //eslint-disable-line
            router.get((req, res) => {
                if (req.params._id) {
                    return Note.findById(req.params._id)
                        .then(json => JSON.parse(json))
                        .then(note =>  Note.findByIdAndUpdate(req.params._id, note))
                        .then(() => res.status(204))
                        .catch(err => errorHandler(err, res));
                }
            });
        })

        .delete((req, res) => {
            if (req.params._id) {
                return Note.findByIdAndRemove(req.params._id)
                    .then(() => res.status(204))
                    .catch(err => errorHandler(err, res));
            }
        });
};