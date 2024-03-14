const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/users");
const sequelize = require("./database/db");

const userController = require("./controller/users");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post("/users/signup", userController.postAddUser);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
