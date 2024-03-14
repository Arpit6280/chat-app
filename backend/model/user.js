const Sequelize = require("sequelize");
const sequelize = require("../database/db");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  phoneNo: Sequelize.STRING,
});

module.exports = User;
