'use strict';
const debug = require('debug')('http:server');

//app dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('./error-handler');

//app setup
const app = express();
const router = express.Router();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI);

debug('MONGODB_URI', MONGODB_URI);

//middleware
app.use(cors());
app.use('/api/v1', router);
require('../route/route-image')(router);
app.use('/*', (req, res) => errorHandler(new Error('Path Error: Path not found'), res));

const server = module.exports = {};

server.start = () => {
  return new Promise((resolve, reject) => {
    if(server.isOn) return reject(new Error('Server already running'));
    server.http = app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
      server.isOn = true;
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
    mongoose.disconnect();
    return resolve(server);
  });
};
