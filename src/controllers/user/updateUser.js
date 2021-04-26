const User = require("../../models/User");

const updateOne = async (req, res) => {
  try {
    const userId = req.params.id;  
    const user = await User.findById(userId);
    await user.updateOne(req.body);
    res.json(user);
  } catch (error) {
    res.json({ error: error.message,message: "Error When Update User" });
  }
};

module.exports = { updateOne };
