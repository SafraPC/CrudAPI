const User = require("../../models/User");

const findAll = async(req,res)=>{
try{
    const users = await User.find();
     res.json(users);
}catch(error){
     res.json({error: error.message,message: "Error When Searcb User"});
}
};

module.exports = {findAll};