const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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
})

module.exports = mongoose.model('Products', productSchema);
