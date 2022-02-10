const express = require('express');
const router = express.Router();
const saleController = require('../controllers/sale');

router.post('/:cartId', saleController.createSale);
router.get('/admin', saleController.getAllSalesForAdmin);

module.exports = router;
