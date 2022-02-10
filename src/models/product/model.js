exports.makeModel = (sequelize, DataTypes, { User }) => {
	const Product = sequelize.define(
		'Product',
		{
			productId: {
				type: DataTypes.INTEGER.UNSIGNED,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			title: {
				type: DataTypes.STRING(255),
				allowNull: false,
				unique: true,
			},
			description: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			price: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			image: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			ownerId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
		},
		{ underscored: true, tablename: 'product' }
	);

	return Product;
};
