'use strict';

module.exports = function(err, res) {
    let message = err.message.toLowerCase();

    switch(true) {
    case message.includes('validation error'): return res.status(400).send(`${err.name}: ${err.message}`);
    case message.includes('enoent'): return res.status(404).send(`${err.name}: ${err.message}`);
    case message.includes('path error'): return res.status(404).send(`${err.name}: ${err.message}`);
    case message.includes('objectid failed'): return res.status(404).send(`${err.name}: ${err.message}`);
    case message.includes('duplicate key'): return res.status(409).send(`${err.name}: ${err.message}`);
    default: return res.status(500).send(`${err.name}: ${err.message}`);
    }
};