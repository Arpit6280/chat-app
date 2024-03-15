const jwt = require("jsonwebtoken");
const User = require("../model/user");
require("dotenv").config();

const authenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("userid>>>", user.userId);
    let users = await User.findByPk(user.userId);
    req.user = users;
    next();
    // })
    // .catch((err) => {
    //   throw new Error(err);
    // });
  } catch (e) {
    console.log(e);
    return res.status(401).json({ msg: "Something Wrong Try again" });
  }
};

module.exports = {
  authenticate,
};
