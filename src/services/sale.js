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

exports.getAllSalesForAdmin = async () => {
	try {
		const sales = await db.Sale.findAll({
			attributes: [
				'saleId',
				'productId',
				'sellerId',
				'buyerId',
				'productQuantity',
				'productPrice',
				'totalPrice',
			],
			include: [
				{
					model: db.User,
					attributes: ['userId', 'name', 'email'],
				},
				{
					model: db.Product,
					attributes: [
						'productId',
						'title',
						'description',
						'price',
						'image',
						'ownerId',
					],
					include: {
						model: db.User,
						attributes: ['userId', 'name', 'email'],
					},
				},
			],
		});

		if (!sales) throw new Error('No sales found');

		return sales;
	} catch (err) {
		throw new Error(err);
	}
};
