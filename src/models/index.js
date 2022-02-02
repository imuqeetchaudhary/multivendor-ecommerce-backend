const config = require("config");
const { Sequelize, DataTypes } = require("sequelize");

const user = require("./user");
const product = require("./product");
const cart = require("./cart");

function init() {
  const sequelize = new Sequelize({ ...config.get("db") });
  return sequelize;
}

const dbClient = init();

const db = {};

db.sequelize = dbClient;

const User = user.init(dbClient, DataTypes);
const Product = product.init(dbClient, DataTypes);
const Cart = cart.init(dbClient, DataTypes, { User, Product });

db.User = User;
db.Product = Product;
db.Cart = Cart;

module.exports = db;
