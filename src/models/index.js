const config = require("config");
const { Sequelize } = require("sequelize");

function init() {
  const sequelize = new Sequelize({ ...config.get("db") });
  return sequelize;
}

const dbClient = init();

const db = {};

db.sequelize = dbClient;

module.exports = db;
