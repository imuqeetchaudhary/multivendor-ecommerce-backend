exports.makeModel = (sequelize, DataTypes) => {
	const Cart = sequelize.define(
		'Cart',
		{
			cartId: {
				type: DataTypes.INTEGER.UNSIGNED,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			userId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			productId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			quantity: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
				defaultValue: 1,
			},
		},
		{ underscored: true, tablename: 'cart' }
	);

	return Cart;
};
