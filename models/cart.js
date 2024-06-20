const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
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
        required: true
    },
})

module.exports = mongoose.model('Cart', cartSchema);