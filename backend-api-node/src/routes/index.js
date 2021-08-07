'use strict'

const express = require('express');
const helmet = require('helmet');
const router = express.Router();
const serverMiddleware = require('../middlewares/server.middlewares');
const cors = require('../../configs/origin');

const product = require('./product.routes');

router.use(cors);
router.use(helmet());
router.use(express.json());
router.use(express.urlencoded({ extended: true, limit: '10000000mb' }));

router.get('/', (_, res) => { res.status(200).json({ msg: '!Bienvenido al Proyecto Hackaton 2021! - Team InterHack' }); });


router.use('/product', product);
router.use(serverMiddleware.errorRoute);
router.use(serverMiddleware.notFound);

module.exports = router;