const saleService = require('../services/sale');
const cartService = require('../services/cart');
const productService = require('../services/product');
const { promise } = require('../middlewares/promise');

exports.createSale = promise(async (req, res) => {
	const { cartId } = req.params;

	const cart = await cartService.getSingleCart({ id: cartId });

	const buyerId = cart.dataValues.User.userId;
	const productQuantity = cart.dataValues.quantity;
	const productId = cart.dataValues.Product.productId;

	const product = await productService.getSingleProduct({ id: productId });

	const sellerId = product.dataValues.ownerId;
	const productPrice = product.dataValues.price;
	const totalPrice = productPrice * productQuantity;

	const sale = await saleService.createSale({
		productId,
		sellerId,
		buyerId,
		productQuantity,
		productPrice,
		totalPrice,
	});

	res.status(200).json({ message: 'Successfully created sale', sale });
});

exports.getAllSalesForAdmin = promise(async (req, res) => {
	const sales = await saleService.getAllSalesForAdmin();

	res.status(200).json({ sales });
});

exports.getAllSalesForSeller = promise(async (req, res) => {
	const sellerId = req.user.userId;

	const sales = await saleService.getAllSalesForSeller({ sellerId });

	res.status(200).json({ sales });
});

exports.getAllSalesForBuyer = promise(async (req, res) => {
	const buyerId = req.user.userId;

	const sales = await saleService.getAllSalesForBuyer({ buyerId });

	res.status(200).json({ sales });
});

exports.getSingleSaleByPk = promise(async (req, res) => {
	const { saleId } = req.params;

	const sale = await saleService.getSingleSaleByPk({ saleId });

	res.status(200).json({ sale });
});
