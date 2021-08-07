'use strict'

const env = require('dotenv');
const path = require('path');
const setting = require('./config.json');
let config = {};

env.config({
    path: path.join(__dirname, '.env')
});

config.environment = () => {
    let environment = process.env.NODE_ENV || 'LOCAL';
    return setting[environment];
}

module.exports = config;
