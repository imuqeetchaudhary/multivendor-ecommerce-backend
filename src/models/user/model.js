exports.makeModel = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			userId: {
				type: DataTypes.INTEGER.UNSIGNED,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(255),
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
		},
		{ underscored: true, tablename: 'user' }
	);

	return User;
};
