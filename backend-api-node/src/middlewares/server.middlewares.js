'use strict'

const response = require("../utils/response.utils");

let server = {};

server.errorRoute = (error, req, res, _) => {
    const msg = error.msg || error.message || 'SERVER INTERNAL ERROR';
    const code = error.code || 500;
    response.error(res, msg, code);

}

server.notFound = (req, res) => {
    const msg = "RESOURCE NOT FOUND";
    const code = 404;
    response.error(res, msg, code);
}

module.exports = server;