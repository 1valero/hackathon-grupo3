'use strict'

const fetch = require('node-fetch');

const accountName = 'www.oechsle.pe';
let product = {};

product.translateResults = (translate, text, target) => {
    const promise = new Promise(async (accept, reject) => {
        try {
            const [translation] = await translate.translate(text, target);
            accept(translation);
        } catch (error) {
            const code = (error.code && !isNaN(error.code)) ? error.code : 500;
            const msg = error.msg || new String(error);
            reject({ msg, code });
        }
    })
    return promise;
}

product.getProductsByText = (text) => {
    const promise = new Promise(async (accept, reject) => {
        try {
            let url = `https://${accountName}/api/catalog_system/pub/products/search?ft=${text}`;
            let options = { timeout: 30000, };
            options["method"] = 'GET';
            const response = await fetch(url, options);
            const result = await response.json();
            if (!response.ok) throw { code: response.status, msg: `Error Vtex API /getProductsByText` };
            accept( result);
        } catch (error) {
            const code = (error.code && !isNaN(error.code)) ? error.code : 500;
            const msg = (error.msg) ? error.msg : new String(error);
            reject({ msg, code });
        }
    })
    return promise;
}

product.crossSelling = (productId) => {
    const promise = new Promise(async (accept, reject) => {
        try {
            let url = `https://${accountName}/api/catalog_system/pub/products/crossselling/whosawalsosaw/${productId}`;
            let options = { timeout: 30000, };
            options["method"] = 'GET';
            const response = await fetch(url, options);
            const result = await response.json();
            if (!response.ok) throw { code: response.status, msg: `Error Vtex API /crossSelling` };
            accept( result);
        } catch (error) {
            const code = (error.code && !isNaN(error.code)) ? error.code : 500;
            const msg = (error.msg) ? error.msg : new String(error);
            reject({ msg, code });
        }
    })
    return promise;
}

module.exports = product;