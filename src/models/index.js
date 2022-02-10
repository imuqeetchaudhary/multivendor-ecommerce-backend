const { Sequelize, DataTypes } = require('sequelize');

const user = require('./user');
const product = require('./product');
const cart = require('./cart');
const sale = require('./cart');

function init() {
	const sequelize = new Sequelize('online-store', 'sa', 'root', {
		host: 'localhost',
		dialect: 'mssql',
		logging: false,
	});
	return sequelize;
}

const dbClient = init();

const db = {};

db.sequelize = dbClient;

const User = user.init(dbClient, DataTypes);
const Product = product.init(dbClient, DataTypes, { User });
const Cart = cart.init(dbClient, DataTypes, { User, Product });
const Sale = sale.init(dbClient, DataTypes, { User, Product });

db.User = User;
db.Product = Product;
db.Cart = Cart;
db.Sale = Sale;

module.exports = db;
