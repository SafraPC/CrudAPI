const User = require("../../models/User");

const deleteAll = async(req,res)=>{
try{
    const users = await User.deleteMany();
     res.json(users.deletedCount);
}catch(error){
     res.json({error: error.message,message: "Error When Delete All User"});
}
};

module.exports = {deleteAll};