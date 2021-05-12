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
        type: Object,
        required: true,
        lowecase: true
    },
    city: {
        type: Object,
        required: true,
        lowecase: true
    },
    file:{
        type:Object,
        required:true
    }
 
}, {
    timestamps: true
});
const WorkWith = mongoose.model('WorkWithUs', WorkWithUs);

module.exports = WorkWith;