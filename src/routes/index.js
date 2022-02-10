const express = require('express');
const router = express.Router();
const { authentication } = require('../middlewares/isAuth');

const user = require('./user');
const product = require('./product');
const cart = require('./cart');
const sale = require('./sale');

router.use('/user', user);
router.use('/product', product);
router.use('/cart', authentication, cart);
router.use('/sale', authentication, sale);

module.exports = router;
