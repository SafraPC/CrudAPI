const User = require("../../models/User");

const findOne = async (req, res) => {
  try {
    const userId = req.params.id;  
    const users = await User.findById(userId);
    res.json(users);
  } catch (error) {
    res.json({error: error.message,message: "Error When Search User" });
  }
};

module.exports = { findOne };
