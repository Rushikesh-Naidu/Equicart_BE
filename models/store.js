const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    logo: {
        type: String,
        required: false
    },
    // cartProducts: [
    //     {
    //         brand:{
    //             type: String, 
    //             required: false
    //         },
    //         name:{
    //             type: String, 
    //             required: false
    //         },
    //         category:{
    //             type: String,
    //             required: false
    //         },
    //         size:{
    //             type: String,
    //             required: false
    //         },
    //         price:{
    //             type: Number,
    //             required: false
    //         },
    //         image:{
    //             type: String,
    //             required: false
    //         },
    //         quantity:{
    //             type: String, 
    //             required: false
    //         },
    //         added:{
    //             type: String, 
    //             required: false
    //         }
    //     }    
    // ]
    cartProducts: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('Store', storeSchema);
