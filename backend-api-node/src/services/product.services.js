'use strict'

const vision = require('@google-cloud/vision');
const { Translate } = require('@google-cloud/translate').v2;
// const setting = require('../../configs/config').environment();
const productHelper = require('../helpers/product.helpers');

const VISION_KEY = './configs/vision-key.json';
const PROJECT_ID = "ir-hkt-equipo-03";//setting.CREDENTIALS.GOOGLE_CLOUD.PROJECT_ID;
const TRANSLATOR_KEY = "AIzaSyAqO5UAIQ2TQZG_tKhp2W2Jc8F3vov9Wx8"; //setting.CREDENTIALS.GOOGLE_CLOUD.KEY;

const translate = new Translate({ projectId: PROJECT_ID, key: TRANSLATOR_KEY });

let product = {};

product.searchProductByImage = (url) => {
    const promise = new Promise(async (accept, reject) => {
        try {
            const client = new vision.ImageAnnotatorClient({ keyFilename: VISION_KEY, });
            const [result] = await client.labelDetection(url);
            const labels = result.labelAnnotations;
            let descriptions = [];
            for (let i = 0; i < labels.length; i++) descriptions.push(labels[i].description);
            const translation = await productHelper.translateResults(translate, descriptions.join(', '), 'es');
            const alternative = translation.split(', ');
            const productList = [];
            for (let j = 0; j < 2; j++) {
                const element = alternative[j];
                const list = await productHelper.getProductsByText(element);
                for (let i = 0; i < list.length; i++) {
                    const item = list[i];
                    const productId = item.productId;
                    const productName = item.productName;
                    const link = item.link;
                    const image = item.items[0].images[0].imageUrl;
                    const listPrice = item.items[0].sellers[0].commertialOffer.ListPrice;
                    const price = item.items[0].sellers[0].commertialOffer.PriceWithoutDiscount;
                    productList.push({ productId, productName, link, image, listPrice, price });
                }
            }
            accept(productList);
        } catch (error) {
            const code = (error.code && !isNaN(error.code)) ? error.code : 500;
            const msg = error.msg || new String(error);
            reject({ msg, code });
        }
    })
    return promise;
}

product.crossSelling = (productId) => {
    const promise = new Promise(async (accept, reject) => {
        try {
            const list = await productHelper.crossSelling(productId);
            let productList = [];
            for (let i = 0; i < list.length; i++) {
                const item = list[i];
                const productId = item.productId;
                const productName = item.productName;
                const link = item.link;
                const image = item.items[0].images[0].imageUrl;
                const listPrice = item.items[0].sellers[0].commertialOffer.ListPrice;
                const price = item.items[0].sellers[0].commertialOffer.PriceWithoutDiscount;
                productList.push({ productId, productName, link, image, listPrice, price });
            }
            accept(productList);
        } catch (error) {
            const code = (error.code && !isNaN(error.code)) ? error.code : 500;
            const msg = error.msg || new String(error);
            reject({ msg, code });
        }
    })
    return promise;
}

module.exports = product;
