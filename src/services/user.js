const db = require("../models");

exports.findUser = async ({ email }) => {
  try {
    const user = await db.User.findOne({
      where: { email },
      attributes: [["user_id", "_id"], "name", "email", "password"],
    });

    return user;
  } catch (err) {
    throw new Error(err);
  }
};

exports.createUser = async ({ name, email, password }) => {
  try {
    const user = await db.User.create({
      name,
      email,
      password,
    });

    return user;
  } catch (err) {
    throw new Error(err);
  }
};

exports.excludePassword = ({ user }) => {
  try {
    const { password, createdAt, updatedAt, ...rest } = user.dataValues;
    return rest;
  } catch (err) {
    throw new Error(err);
  }
};
