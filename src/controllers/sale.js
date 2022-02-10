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
