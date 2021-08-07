'use strict'

let response = {};

response.success = (res, message, status) => {
    const msg = message || '';
    const code = status || 200;
    const info = {
        success: (typeof msg === 'object') ? { data: msg } : { msg: msg }
    };
    res.status(code).json(info);
}

response.error = (res, message, status) => {
    const msg = message || 'Internal Server Error';
    const code = status || 500;
    const info = {
        error: (typeof msg === 'object') ? { data: msg } : { msg: msg }
    };
    res.status(code).json(info);
}
module.exports = response;
