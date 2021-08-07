'use strict'

const express = require('express');
const router = express.Router();

const productMiddleware = require('../middlewares/product.middlewares');
const productController = require('../controllers/product.controllers');

router.post('/search/by-image', productMiddleware.searchProductByImage, productController.searchProductByImage);
router.get('/cross-selling/:productId', productMiddleware.productId, productController.crossSelling);

module.exports = router;