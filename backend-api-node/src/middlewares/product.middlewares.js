'use strict'

const joi = require('@hapi/joi');
const error = require('../utils/error.utils');

const REGEX_INTEGER_NUMBER = /^[0-9]+$/;

const schema = {
    searchProductByImage: joi.object({
        url: joi.string().min(10).required().messages({
            'string.base': 'URL: inválido',
            'string.min': 'URL: mínimo de caracteres es 10',
            'any.required': 'URL: requerido'
        }),
    }),
    productId: joi.object({
        productId: joi.string().min(1).max(18).regex(REGEX_INTEGER_NUMBER).required().messages({
            'string.base': 'ID DE PRODUCTO: inválido',
            'string.pattern.base': 'ID DE PRODUCTO: caracteres inválidos',
            'string.min': 'ID DE PRODUCTO: mínimo de caracteres es 1',
            'string.max': 'ID DE PRODUCTO: máximo de caracteres es 18',
            'any.required': 'ID DE PRODUCTO: requerido'
        }),
    }),
};

let validator = {};

validator.searchProductByImage = async (req, res, next) => {
    let validate = await schema.searchProductByImage.validate(req.body);
    if (validate.error) {
        let message = '';
        let errors = validate.error.details;
        for (let i = 0; i < errors.length; i++) {
            const error = errors[i];
            message += error.message;
            if (i == (errors.length - 1)) message += '';
            else message += ', \n';
        }
        next(error.message(message, 422));
    }
    next();
}

validator.productId = async (req, res, next) => {
    let validate = await schema.productId.validate(req.params);
    if (validate.error) {
        let message = '';
        let errors = validate.error.details;
        for (let i = 0; i < errors.length; i++) {
            const error = errors[i];
            message += error.message;
            if (i == (errors.length - 1)) message += '';
            else message += ', \n';
        }
        next(error.message(message, 422));
    }
    next();
}

module.exports = validator
