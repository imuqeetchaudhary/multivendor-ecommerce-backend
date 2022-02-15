const express = require('express');
const router = express.Router();
const saleController = require('../controllers/sale');

router.post('/:cartId', saleController.createSale);
router.get('/admin', saleController.getAllSalesForAdmin);
router.get('/seller', saleController.getAllSalesForSeller);
router.get('/buyer', saleController.getAllSalesForBuyer);
router.get('/:saleId', saleController.getSingleSaleByPk);
router.get('/product-sold/:productId', saleController.getTotalQuantityOfProductSold);
router.get(
	'/purchase-history/:buyerId',
	saleController.getAllPurchasesHistoryForASpecificBuyer
);

module.exports = router;
