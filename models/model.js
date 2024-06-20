const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})


const registerSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    pin: Number,
    confirmPin: Number
})

const loginSchema = new mongoose.Schema({
    phone: Number,
    pin: Number,
})

const productSchema = new mongoose.Schema({
    brand: String,
    name: String,
    category: String,
    size: String,
    price: Number,
    image: String,
    quantity: Number,
    added: String
})

module.exports = mongoose.model('Data', dataSchema);
module.exports = mongoose.model('Register', registerSchema);
module.exports = mongoose.model('Login', loginSchema);