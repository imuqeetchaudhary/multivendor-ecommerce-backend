const express = require('express');
const router = express.Router();
const { authentication } = require('../middlewares/isAuth');

const user = require('./user');
const product = require('./product');
const cart = require('./cart');

router.use('/user', user);
router.use('/product', product);
router.use('/cart', authentication, cart);

module.exports = router;
