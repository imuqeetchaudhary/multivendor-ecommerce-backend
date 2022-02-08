const db = require('../models');

exports.createProduct = async ({ title, price, image, description }) => {
	try {
		const product = await db.Product.create({
			title,
			price,
			image,
			description,
		});

		return product;
	} catch (err) {
		throw new Error(err);
	}
};

exports.getAllProducts = async () => {
	try {
		const products = await db.Product.findAll({
			attributes: ['productId', 'title', 'description', 'price', 'image'],
		});
		return products;
	} catch (err) {
		throw new Error(err);
	}
};

exports.getSingleProduct = async ({ id }) => {
	try {
		const products = await db.Product.findByPk(id, {
			attributes: ['productId', 'title', 'description', 'price', 'image'],
		});
		if (!products) return 'Product not found';
		return products;
	} catch (err) {
		throw new Error(err);
	}
};

exports.updateProduct = async ({ id, title, price, description }) => {
	try {
		const updateProduct = await db.Product.update(
			{
				title,
				price,
				description,
			},
			{ where: { productId: id } }
		);

		console.log(updateProduct);

		return updateProduct == 0 ? 'Product not found' : 'Successfully updated product';
	} catch (err) {
		throw new Error(err);
	}
};

exports.deleteProduct = async ({ id }) => {
	try {
		const products = await db.Product.destroy({ where: { productId: id } });

		return products == 1 ? 'Successfully deleted Product' : "Product doesn't exixts";
	} catch (err) {
		throw new Error(err);
	}
};

exports.excludeCreatedAtUpdatedAt = ({ product }) => {
	try {
		const { createdAt, updatedAt, ...rest } = product.dataValues;
		return rest;
	} catch (err) {
		throw new Error(err);
	}
};
