const WorkWithUs = require("../../models/WorkWithUs");

const registerWorkWithUs = async(req,res)=>{
try{
    const workWith = await WorkWithUs.create(req.body);
     res.json(workWith);
}catch(error){
     res.json({error: error.message, message: "Registration Failed" });
}
};

module.exports = {registerWorkWithUs};