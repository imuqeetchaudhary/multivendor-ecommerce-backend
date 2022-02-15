const express = require('express');
const router = express.Router();
const { upload } = require('../middlewares/upload');
const { authentication } = require('../middlewares/isAuth');
const productController = require('../controllers/product');

router.post(
	'/',
	authentication,
	upload.single('image'),
	productController.createProduct
);

router.get('/', productController.getAllProducts);

router.get('/:id', productController.getSingleProduct);

router.patch('/:id', authentication, productController.updateProduct);

router.delete('/:id', authentication, productController.deleteProduct);

router.get(
	'/seller/:sellerId',
	authentication,
	productController.getSaleGraphOfAllProductsForASpecificSeller
);

module.exports = router;
