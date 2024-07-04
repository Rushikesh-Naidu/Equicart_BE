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
    },
    cartProducts: [
        {
            brand:{
                type: String, 
                required: true
            },
            name:{
                type: String, 
                required: true
            },
            category:{
                type: String,
                required: true
            },
            size:{
                type: String,
                required: true
            },
            price:{
                type: Number,
                required: true
            },
            image:{
                type: String,
                required: false
            },
            quantity:{
                type: String, 
                required: false
            },
            added:{
                type: String, 
                required: false
            }
        }    
    ]
})

module.exports = mongoose.model('Users', userSchema);
