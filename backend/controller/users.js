const User = require("../model/user");
const bcrypt = require("bcrypt");
exports.postAddUser = (req, res) => {
  const { email, name, password, phoneNo } = req.body;
  User.findAll({ where: { email: email } }).then((users) => {
    if (users.length == 0) {
      const saltrounds = 10;
      bcrypt.hash(password, saltrounds, async (err, hash) => {
        try {
          let result = await User.create({
            name: name,
            email: email,
            password: hash,
            phoneNo: phoneNo,
          });
          return res.status(201).json(result);
        } catch (e) {
          return res.status(401).json({ msg: "Something Wrong Try again" });
        }
      });
    } else {
      return res.status(409).json({ msg: "email already exists" });
    }
  });
};
