'use strict'

let error = {};


error.message = (_message, _code) => {
    const msg = _message || 'Internal Server Error';
    const code = _code || 500;
    let err = new Error(msg);
    err.code = code;
    return err;
}


module.exports = error;
