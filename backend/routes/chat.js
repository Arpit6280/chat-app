const express = require("express");

const router = express.Router();

const chatController = require("../controller/chats");
const { authenticate } = require("../middleware/auth");

router.post("/addmsg", authenticate, chatController.addMsg);
router.get("/getmsg", authenticate, chatController.getMsg);

exports.routes = router;
