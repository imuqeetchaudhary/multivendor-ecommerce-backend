exports.makeAssociations = ({ User, Sale, Product }) => {
	User.hasMany(Sale, { foreignKey: 'seller_id' });
	Sale.belongsTo(User, { foreignKey: 'seller_id' });

	User.hasMany(Sale, { foreignKey: 'buyer_id' });
	Sale.belongsTo(User, { foreignKey: 'buyer_id' });

	Product.hasMany(Sale, { foreignKey: 'product_id' });
	Sale.belongsTo(Product, { foreignKey: 'product_id' });
};
