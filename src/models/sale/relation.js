exports.makeAssociations = ({ User, Sale, Product }) => {
	User.hasMany(Sale, { foreignKey: 'seller_id', as: 'Seller' });
	Sale.belongsTo(User, { foreignKey: 'seller_id', as: 'Seller' });

	User.hasMany(Sale, { foreignKey: 'buyer_id', as: 'Buyer' });
	Sale.belongsTo(User, { foreignKey: 'buyer_id', as: 'Buyer' });

	Product.hasMany(Sale, { foreignKey: 'product_id', as: 'Product' });
	Sale.belongsTo(Product, { foreignKey: 'product_id', as: 'Product' });
};
