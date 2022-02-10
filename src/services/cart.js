const db = require('../models');

exports.createCart = async ({ userId, productId }) => {
	try {
		const cart = await db.Cart.create({
			userId,
			productId,
		});

		return cart;
	} catch (err) {
		throw new Error(err);
	}
};

exports.getAllCarts = async ({ userId }) => {
	try {
		const carts = await db.Cart.findAll({
			where: { userId },
			attributes: ['cartId', 'quantity'],
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
				},
			],
		});
		if (!carts) throw new Error('No product found in cart');
		return carts;
	} catch (err) {
		throw new Error(err);
	}
};

exports.getSingleCart = async ({ id }) => {
	try {
		const cart = await db.Cart.findByPk(id, {
			attributes: ['cartId', 'quantity'],
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
				},
			],
		});
		if (!cart) return 'Cart not found';
		return cart;
	} catch (err) {
		throw new Error(err);
	}
};

exports.updateCart = async ({ id, productId, quantity }) => {
	try {
		const updateCart = await db.Cart.update(
			{
				productId,
				quantity,
			},
			{ where: { cartId: id } }
		);

		return updateCart == 0
			? 'Cart product not found'
			: 'Successfully updated cart product';
	} catch (err) {
		throw new Error(err);
	}
};

exports.deleteCart = async ({ id }) => {
	try {
		const cart = await db.Cart.destroy({ where: { cartId: id } });
		return cart == 1
			? 'Successfully deleted cart product'
			: "Cart product doesn't exixts";
	} catch (err) {
		throw new Error(err);
	}
};
