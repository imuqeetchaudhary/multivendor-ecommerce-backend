const { makeModel } = require('./model');
const { makeAssociations } = require('./relation');

exports.init = (sequelize, DataTypes, { User, Product }) => {
	const Sale = makeModel(sequelize, DataTypes);

	makeAssociations({ User, Sale, Product });

	return Sale;
};
