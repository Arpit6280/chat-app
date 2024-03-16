const Sequelize = require("sequelize");
const sequelize = require("../database/db");

const Group = sequelize.define("group", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.TEXT,
});

module.exports = Group;
