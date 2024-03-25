const { Op } = require("sequelize");
const Message = require("../model/message");
const Group = require("../model/group");
const GroupUser = require("../model/groupuser");

exports.addMsg = async (req, res) => {
  try {
    let { date, message, currentTime, groupId } = req.body;
    // console.log(date, message, currentTime);
    let result = await Message.create({
      msg: message,
      date: date,
      time: currentTime,
      userId: req.user.id,
      groupId: groupId,
    });
    // const group = await Group.create({
    //   name: "g4",
    // });
    // let gid = group.id;
    // const groups = await GroupUser.bulkCreate([
    //   { groupId: 4, userId: 1 },
    //   { groupId: 4, userId: 2 },
    // ]);
    // const a = await req.user.getGroups();
    // console.log("aaa", a);
    // console.log(groups);
    // console.log("groups", group);
    // console.log("groupsId", group.id);
    return res.status(201).json(result);
  } catch (e) {
    return res.status(401).json({ msg: "Something Wrong Try again" });
  }
};

// exports.getMsg = async (req, res) => {
//   try {
//     let lastmsg = req.query.lastmsg;
//     console.log(lastmsg);
//     if (lastmsg === null || lastmsg === undefined) {
//       lastmsg = -1;
//     }
//     let result = await req.user.getMessages({
//       where: {
//         id: { [Op.gt]: lastmsg },
//       },
//     });
//     console.log(result);
//     return res.status(201).json(result);
//   } catch {
//     return res.status(401).json({ msg: "Something Wrong Try again" });
//   }
// };

exports.getMsg = async (req, res) => {
  try {
    let groupId = req.query.groupId;
    // console.log(lastmsg);
    // if (lastmsg === null || lastmsg === undefined) {
    //   lastmsg = -1;
    // }
    let result = await Message.findAll({
      where: {
        groupId: groupId,
      },
    });
    console.log(result);
    return res.status(201).json(result);
  } catch {
    return res.status(401).json({ msg: "Something Wrong Try again" });
  }
};
