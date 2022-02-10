exports.makeAssociations = ({ User, Product }) => {
	User.hasMany(Product, { foreignKey: 'owner_id' });
	Product.belongsTo(User, { foreignKey: 'owner_id' });
};
