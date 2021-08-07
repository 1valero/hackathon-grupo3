'use strict'

const cors = require('cors');

const whitelist = [undefined, "http://localhost:3000"];
let options = {
    origin: (origin, cb) => {
        // console.log('origin', origin)
        if (whitelist.indexOf(origin) !== -1) cb(null, true);
        else cb(new Error('Not allowed by CORS'));
    },
    methods: "POST",
    allowedHeaders: ['Authorization', 'authorization', 'Content-Type', 'content-type'],
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

module.exports = cors(options);
