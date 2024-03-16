const Sequelize = require("sequelize");
const sequelize = require("../database/db");

const GroupUser = sequelize.define("groupuser", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = GroupUser;
