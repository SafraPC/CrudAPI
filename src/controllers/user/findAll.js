const User = require("../../models/User");

const findAll = async(req,res)=>{
try{
    const users = await User.find();
     res.json(users);
}catch(error){
     res.json({error:"Error in User´s Search"});
}
};

module.exports = {findAll};