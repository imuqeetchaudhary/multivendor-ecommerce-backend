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
				'productQuantity',
				'productPrice',
				'totalPrice',
			],
			include: [
				{
					model: db.User,
					as: 'Seller',
					attributes: [['user_id', 'sellerId'], 'name', 'email'],
				},
				{
					model: db.User,
					as: 'Buyer',
					attributes: [['user_id', 'buyerId'], 'name', 'email'],
				},

				{
					model: db.Product,
					as: 'Product',
					attributes: [
						'productId',
						'title',
						'description',
						'price',
						'image',
						'ownerId',
					],
				},
			],
		});

		if (!sales) throw new Error('No sales found');

		return sales;
	} catch (err) {
		throw new Error(err);
	}
};

exports.getAllSalesForSeller = async ({ sellerId }) => {
	try {
		const sales = await db.Sale.findAll({
			where: { sellerId },
			attributes: [
				'saleId',
				'productId',
				'productQuantity',
				'productPrice',
				'totalPrice',
			],
			include: [
				{
					model: db.User,
					as: 'Seller',
					attributes: [['user_id', 'sellerId'], 'name', 'email'],
				},
				{
					model: db.User,
					as: 'Buyer',
					attributes: [['user_id', 'buyerId'], 'name', 'email'],
				},

				{
					model: db.Product,
					as: 'Product',
					attributes: [
						'productId',
						'title',
						'description',
						'price',
						'image',
						'ownerId',
					],
				},
			],
		});

		if (!sales) throw new Error('No sales found');

		return sales;
	} catch (err) {
		throw new Error(err);
	}
};

exports.getAllSalesForBuyer = async ({ buyerId }) => {
	try {
		const sales = await db.Sale.findAll({
			where: { buyerId },
			attributes: [
				'saleId',
				'productId',
				'productQuantity',
				'productPrice',
				'totalPrice',
			],
			include: [
				{
					model: db.User,
					as: 'Seller',
					attributes: [['user_id', 'sellerId'], 'name', 'email'],
				},
				{
					model: db.User,
					as: 'Buyer',
					attributes: [['user_id', 'buyerId'], 'name', 'email'],
				},

				{
					model: db.Product,
					as: 'Product',
					attributes: [
						'productId',
						'title',
						'description',
						'price',
						'image',
						'ownerId',
					],
				},
			],
		});

		if (!sales) throw new Error('No sales found');

		return sales;
	} catch (err) {
		throw new Error(err);
	}
};

exports.getSingleSaleByPk = async ({ saleId: id }) => {
	try {
		const sale = await db.Sale.findByPk(id, {
			attributes: [
				'saleId',
				'productId',
				'productQuantity',
				'productPrice',
				'totalPrice',
			],
			include: [
				{
					model: db.User,
					as: 'Seller',
					attributes: [['user_id', 'sellerId'], 'name', 'email'],
				},
				{
					model: db.User,
					as: 'Buyer',
					attributes: [['user_id', 'buyerId'], 'name', 'email'],
				},

				{
					model: db.Product,
					as: 'Product',
					attributes: [
						'productId',
						'title',
						'description',
						'price',
						'image',
						'ownerId',
					],
				},
			],
		});

		return sale;
	} catch (err) {
		throw new Error(err);
	}
};

exports.getAllSalesForASingleProduct = async ({ productId }) => {
	try {
		const allSalesForASingleProduct = await db.Sale.findAll({
			where: { productId },
		});

		return allSalesForASingleProduct;
	} catch (err) {
		throw new Error(err);
	}
};
