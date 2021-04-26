const User = require("../../models/User");

const deleteOne = async (req, res) => {
  try {
    const userId = req.params.id;  
    const users = await User.findByIdAndDelete(userId);
    res.json(users.deletedCount);
  } catch (error) {
    res.json({ error: error.message,message: "Error when Delete One of User"  });
  }
};

module.exports = { deleteOne };
