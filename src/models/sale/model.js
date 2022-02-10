exports.makeModel = (sequelize, DataTypes) => {
	const Sale = sequelize.define(
		'Sale',
		{
			saleId: {
				type: DataTypes.INTEGER.UNSIGNED,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			productId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			sellerId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			buyerId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			productQuantity: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
				defaultValue: 1,
			},
			productPrice: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			totalPrice: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
		},
		{ underscored: true, tablename: 'sale' }
	);

	return Sale;
};
