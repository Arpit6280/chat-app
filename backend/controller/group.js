const Group = require("../model/group");
const GroupUser = require("../model/groupuser");
const User = require("../model/user");

exports.createGroup = async (req, res) => {
  let { name, users } = req.body;
  console.log(name, users);

  const group = await Group.create({
    name: name,
  });
  let members = [];
  for (const iterator of users) {
    members.push({ groupId: group.id, userId: iterator });
  }
  console.log(members);
  let groupuser = await GroupUser.bulkCreate(members);
  console.log(groupuser);
};

exports.addNewGroupMembers = async (req, res) => {
  let { groupId, users } = req.body;
  console.log(groupId, users);

  let members = [];
  for (const iterator of users) {
    members.push({ groupId, userId: iterator });
  }
  console.log(members);
  let groupuser = await GroupUser.bulkCreate(members);
  console.log(groupuser);
};

exports.getGroups = async (req, res) => {
  try {
    const result = await req.user.getGroups();
    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json({ msg: "Something Wrong Try again" });
  }
};

exports.getGroupMembers = async (req, res) => {
  try {
    let groupId = req.query.groupId;
    let usersIds = await GroupUser.findAll({
      attributes: ["userId"],
      where: {
        groupId: groupId,
      },
    });
    let userIds = [];
    for (const user of usersIds) {
      userIds.push(user.userId);
    }
    console.log(userIds);
    // console.log("userr", users);
    // console.log("userdid", users[0].userId);
    let users = await User.findAll({
      attributes: ["id", "name", "email", "phoneNo"],
      where: {
        id: userIds,
      },
    });
    console.log("users", users[0]);
    return res.status(201).json(users);
  } catch (error) {
    return res.status(500).json({ msg: "Something wrong try again" });
  }
};

exports.deleteMember = async (req, res) => {
  let { userId } = req.query;
  console.log(userId);
  try {
    let a = await GroupUser.destroy({
      where: {
        userId: userId,
      },
    });
    return res.status(201).json(a);
  } catch (e) {
    return res.status(500).json({ msg: "Something wrong try again" });
  }
};
