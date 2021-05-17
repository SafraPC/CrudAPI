const mongoose = require('mongoose');

const MyContact = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
   
    email: {
        type: String,
        required:true,
        lowercase: true,
    },
   
    typeWork: {
        type: String,
        required: true,
        lowecase: true
    },
    description:{
        type:String,
        required:true
    }
 
}, {
    timestamps: true
});
const Contact = mongoose.model('contact', MyContact);

module.exports = Contact;