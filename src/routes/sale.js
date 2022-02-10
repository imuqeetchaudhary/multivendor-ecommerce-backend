const express = require('express');
const router = express.Router();
const saleController = require('../controllers/sale');

router.post('/:cartId', saleController.createSale);
router.get('/admin', saleController.getAllSalesForAdmin);
router.get('/seller', saleController.getAllSalesForSeller);
router.get('/buyer', saleController.getAllSalesForBuyer);
router.get('/:saleId', saleController.getSingleSaleByPk);

module.exports = router;
