const { makeModel } = require('./model');
const { makeAssociations } = require('./relation');

exports.init = (sequelize, DataTypes, { User }) => {
	const Product = makeModel(sequelize, DataTypes, { User });

	makeAssociations({ User, Product });

	return Product;
};
