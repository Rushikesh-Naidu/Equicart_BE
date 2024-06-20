const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    pin:{
        type: Number,
        required: true
    },
    confirmPin:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Users', userSchema);
