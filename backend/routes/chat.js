const express = require("express");

const router = express.Router();

const chatController = require("../controller/chats");
const { authenticate } = require("../middleware/auth");

router.post("/msg", authenticate, chatController.addMsg);

exports.routes = router;
