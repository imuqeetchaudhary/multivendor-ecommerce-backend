const { User } = require("../db/models/user");

exports.findUser = async ({ email }) => {
  try {
    const user = await User.findOne({ email });
    console.log(user);
    return user;
  } catch (err) {
    throw new Error(err);
  }
};

exports.createUser = async ({ name, email, password }) => {
  try {
    const user = new User({
      name,
      email,
      password,
    });

    await user.save();
    return user;
  } catch (err) {
    throw new Error(err);
  }
};
