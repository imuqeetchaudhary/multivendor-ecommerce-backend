const express = require('express');
const router = express.Router();
const saleController = require('../controllers/sale');

router.post('/:cartId', saleController.createSale);

module.exports = router;
