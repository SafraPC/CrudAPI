const User = require("../models/User");

const sendText = async(req,res)=>{
try{
    const users = await User.find();
     res.json(users);
}catch(error){
     res.json({error:"Registrations Failed"});
}
};

module.exports = {sendText};