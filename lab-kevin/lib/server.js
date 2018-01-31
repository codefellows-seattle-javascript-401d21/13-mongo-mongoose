'use strict';

//app dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('./error-handler');

//app setup
const app = express();
const router = app.Router();

//middleware
app.use(cors);
app.use('/api/v1/image', router);
require('../router.route')(router);
app.use('/*', (req, res) => errorHandler(new Error('Path Error: Path not found'), res));

const server = module.exports = {};

server.start = () => {
  return new Promise((resolve, reject) => {
    if(server.isOn) return reject(new Error('Server already running'));
    server.http = app.listen(process.env.PORT, () => {
      console.log(`Listening on ${process.env.PORT}`);
      server.isOn = true;
      server.db = mongoose.connect(process.env.MONGO_URI)
    });
    return resolve(server);
  });
};

server.stop = () => {
  return new Promise( (resolve, reject) => {
    if(!server.isOn) return reject(new Error('Server already stopped'));
    console.log('Server shutting down');
    server.isOn = false;
    server.http.close();
    server.db.disconnect();
    return resolve(server);
  });
};
