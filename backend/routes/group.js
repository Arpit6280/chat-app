const express = require("express");

const router = express.Router();

const groupController = require("../controller/group");
const { authenticate } = require("../middleware/auth");

router.post("/create", authenticate, groupController.createGroup);
router.get("/getgroups", authenticate, groupController.getGroups);
router.get("/getmembers", authenticate, groupController.getGroupMembers);
router.post("/addNewMembers", authenticate, groupController.addNewGroupMembers);
router.delete("/removeUser", groupController.deleteMember);

exports.routes = router;
