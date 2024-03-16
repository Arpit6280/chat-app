const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/users");
const chatRoutes = require("./routes/chat");
const sequelize = require("./database/db");
const User = require("./model/user");
const Message = require("./model/message");
const Group = require("./model/group");
const GroupUser = require("./model/groupuser");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(bodyParser.json());

app.use("/users", userRoutes.routes);
app.use("/chat", chatRoutes.routes);

User.hasMany(Message);
Message.belongsTo(User, { constraints: true, onDelete: "CASCADE" });

Group.hasMany(Message);
User.belongsToMany(Group, { through: GroupUser });
Group.belongsToMany(User, { through: GroupUser });

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
