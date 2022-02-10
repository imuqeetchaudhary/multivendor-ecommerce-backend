const { makeModel } = require('./model');

exports.init = (sequelize, DataTypes) => {
	const User = makeModel(sequelize, DataTypes);
	return User;
};
