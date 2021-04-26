const User = require("../../models/User");

const updateOne = async (req, res) => {
  try {
    const userId = req.params.id;  
    const user = await User.findById(userId);
    await user.updateOne(req.body);
    res.json(user);
  } catch (error) {
    res.json({ error: "Error When Update User" , that: error.message});
  }
};

module.exports = { updateOne };
