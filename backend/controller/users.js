const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
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

function generateAccessToken(id) {
  return jwt.sign({ userId: id }, process.env.JWT_SECRET_KEY);
}

exports.postLoginUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    let users = await User.findAll({ where: { email: email } });
    if (users.length === 0) {
      res.status(404).json({ msg: "User not found" });
    } else {
      bcrypt.compare(password, users[0].password, (err, result) => {
        if (err) {
          return res.status(500).json({ msg: "Something wrong" });
        }
        if (result === true) {
          return res.status(201).json({
            token: generateAccessToken(users[0].id),
            user: users[0],
          });
        } else return res.status(500).json({ msg: "Incorrect Password" });
      });
    }
  } catch (e) {
    return res.status(500).json({ msg: "Something wrong" });
  }
};
