const User = require("../../models/User");

const deleteOne = async (req, res) => {
  try {
    const userId = req.params.id;  
    const users = await User.findByIdAndDelete(userId);
    res.json(users.deletedCount);
  } catch (error) {
    res.json({ error: "Error in Delete One of Users" });
  }
};

module.exports = { deleteOne };
