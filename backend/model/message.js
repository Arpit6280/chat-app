const Sequelize = require("sequelize");
const sequelize = require("../database/db");

const Message = sequelize.define("message", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  msg: Sequelize.TEXT,
  date: Sequelize.DATEONLY,
  time: Sequelize.TIME,
});

module.exports = Message;
