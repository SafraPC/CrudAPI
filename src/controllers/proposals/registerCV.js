const WorkWithUs = require("../../models/WorkWithUs");

const registerWorkWithUs = async(req,res)=>{
try{
     const file = req.file.filename
     const url = `http://localhost:8080/uploads/${file}`
     const workWith = await WorkWithUs.create({...req.body,cv:url});
     res.json(workWith);

}catch(error){
     res.json({error: error.message, message: "Registration Failed" });
}
};

module.exports = {registerWorkWithUs};