exports.makeAssociations = ({ User, Product, Cart }) => {
	User.hasMany(Cart, { foreignKey: 'user_id' });
	Cart.belongsTo(User, { foreignKey: 'user_id' });

	Product.hasMany(Cart, { foreignKey: 'product_id' });
	Cart.belongsTo(Product, { foreignKey: 'product_id' });
};
