const { Op } = require("sequelize");
const Message = require("../model/message");

exports.addMsg = async (req, res) => {
  try {
    let { date, message, currentTime } = req.body;
    console.log(date, message, currentTime);
    let result = await Message.create({
      msg: message,
      date: date,
      time: currentTime,
      userId: req.user.id,
    });
    return res.status(201).json(result);
  } catch (e) {
    return res.status(401).json({ msg: "Something Wrong Try again" });
  }
};

exports.getMsg = async (req, res) => {
  try {
    let lastmsg = req.query.lastmsg;
    console.log(lastmsg);
    if (lastmsg === null || lastmsg === undefined) {
      lastmsg = -1;
    }
    let result = await req.user.getMessages({
      where: {
        id: { [Op.gt]: lastmsg },
      },
    });
    console.log(result);
    return res.status(201).json(result);
  } catch {
    return res.status(401).json({ msg: "Something Wrong Try again" });
  }
};
