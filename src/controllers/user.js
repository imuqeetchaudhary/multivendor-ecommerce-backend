const userService = require("../services/user");
const { promise } = require("../middlewares/promise");
const bcrypt = require("bcrypt");

exports.register = promise(async (req, res) => {
  const { name, email, password } = req.body;

  const emailExists = await userService.findUser({ email });
  console.log(emailExists);
  if (emailExists) throw new Error("Email already Exists");

  const hash = bcrypt.hashSync(password, 10);

  const user = await userService.createUser({ name, email, password: hash });

  res.status(200).json({ message: "Successfully created user", user });
});
