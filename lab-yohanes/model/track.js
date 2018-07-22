'use strict';

const mongoose = require('mongoose')

const Track = mongoose.Schema({
  'speechiness': Number,
  'key': { type: Number },
  'time_signature': { type: Number },
  'liveness': { type: Number },
  'loudness': { type: Number },
  'duration_ms': { type: Number },
  'danceability': { type: Number },
  'duration': { type: Number },
  'valence': { type: Number },
  'acousticness': { type: Number },
  'spotify_id': { type: String },
  'volume_number': { type: Number },
  'energy': { type: Number },
  'tempo': { type: Number },
  'instrumentalness': { type: Number },
  'mode': { type: Number },
  'number': { type: Number },
  'artist': { type: String, require: true }, //our new  content=""
  'title': { type: String, require: true }, //our new title=""
}, { timestamps: true })

module.exports = mongoose.model('tracks', Track)