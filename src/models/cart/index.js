const { makeModel } = require('./model');
const { makeAssociations } = require('./relation');

exports.init = (sequelize, DataTypes, { User, Product }) => {
	const Cart = makeModel(sequelize, DataTypes);

	makeAssociations({ User, Product, Cart });

	return Cart;
};
