'use strict'

const productServices = require('../services/product.services');
const response = require('../utils/response.utils');

let product = {};

product.searchProductByImage = async (req, res) => {
    try {
        const { url } = req.body;
        const list = await productServices.searchProductByImage(url);
        response.success(res, list, 200);
    } catch (error) {
        const code = (error.code && !isNaN(error.code)) ? error.code : 500;
        const msg = error.msg || error.message;
        response.error(res, msg, code);
    }
}

product.crossSelling = async (req, res) => {
    try {
        const { productId } = req.params;
        const list = await productServices.crossSelling(productId);
        response.success(res, list, 200);
    } catch (error) {
        const code = (error.code && !isNaN(error.code)) ? error.code : 500;
        const msg = error.msg || error.message;
        response.error(res, msg, code);
    }
}


module.exports = product;