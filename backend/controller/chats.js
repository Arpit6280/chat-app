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
    let result = await req.user.getMessages();
    console.log(result);
    return res.status(201).json(result);
  } catch {
    return res.status(401).json({ msg: "Something Wrong Try again" });
  }
};
