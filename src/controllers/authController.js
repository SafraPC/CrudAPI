const User = require('../models/User');

const authController = async(req,res)=>{
try{
    const user = await User.create(req.body);
     res.json(user);
}catch(error){
     res.json({error:"Registrations Failed"});
}
};

module.exports = {authController};