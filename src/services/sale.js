const db = require('../models');

exports.createSale = async ({
	productId,
	sellerId,
	buyerId,
	productQuantity,
	productPrice,
	totalPrice,
}) => {
	try {
		const sale = await db.Sale.create({
			productId,
			sellerId,
			buyerId,
			productQuantity,
			productPrice,
			totalPrice,
		});

		return sale;
	} catch (err) {
		throw new Error(err);
	}
};
