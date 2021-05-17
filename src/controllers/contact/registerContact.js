const Contact = require("../../models/contact");

const registerContact = async(req,res)=>{
try{
    const contact = await Contact.create(req.body);
     res.json(contact);
}catch(error){
     res.json({error: error.message, message: "Registration Failed" });
}
};

module.exports = {registerContact};