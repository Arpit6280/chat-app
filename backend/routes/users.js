const express = require("express");

const router = express.Router();
const userController = require("../controller/users");

router.post("/signup", userController.postAddUser);
router.post("/login", userController.postLoginUser);

exports.routes = router;
