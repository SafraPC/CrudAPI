const mongoose = require('mongoose');

const WorkWithUs = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required:true,
        lowercase: true,
    },
    state: {
        type: String,
        required: true,
        lowecase: true
    },
    city: {
        type: String,
        required: true,
        lowecase: true
    },
    cv:{
        type:String,
        required:true
    }
 
}, {
    timestamps: true
});
const WorkWith = mongoose.model('WorkWithUs', WorkWithUs);

module.exports = WorkWith;