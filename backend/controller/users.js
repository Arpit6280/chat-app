const User = require("../model/user");
const bcrypt = require("bcrypt");
exports.postAddUser = (req, res) => {
  const { email, name, password, phoneNo } = req.body;
  console.log(req.body);
  console.log("hi");
  bcrypt.hash(password, 10, async (err, hash) => {
    User.create({
      name: name,
      email: email,
      password: hash,
      phoneNo: phoneNo,
    })
      .then((result) => {
        console.log(result);
        return res.status(201).json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  console.log(email, name, password, phoneNo);
};
