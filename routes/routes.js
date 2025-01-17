const express = require('express');

const router = express.Router()

module.exports = router;

const Model = require('../models/model');

const userSchema = require("../models/users");

// Create User
router.post('/createUser', async (req, res) => {
  let user1 = new userSchema({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    pin: req.body.pin,
    confirmPin: req.body.confirmPin
  });
  console.log(`${user1} added`);
  try {
    await user1.save().then(() => res.status(200).json({ newUser: user1 }));
  } catch (error) {
    res.send(`cant save new user: ${error.message}`);
  }
});
// Get user by phone number
router.get('/userValid/:phone', async (req, res) => {
    let data = await userSchema.find({
        "$or":
            {  
                phone:{$regex:req.params.phone}
            }        
    })
    res.send(data)   
})
// update user cart details
// router.post("/addUserCart", async (req, res) => {
//     var _id = req.body._id;
//     let data = await userSchema.find({
//         "$or":
//             {  
//                 _id:_id
//             }        
//     })
//     data.cartProducts = req.body.cartProducts;
//            // now update it in MongoDB
//            // res.update(function (err, data) {
//            //     if (err) {
//            //          res.send(`cant save cart: ${error.message}`);
//            //     }
//            //     // res.redirect('/user/' + user._id);
//            // });   
//             res.update(data)   

// })
router.put('/updateUserCart/:id', function(req, res) {
    // var db = req.db;
    var userToUpdate = req.params.id;
    userSchema.collection('cartProducts').update({ _id: ObjectId(userToUpdate)}, req.body, function (err, result) {
        res.send(
            (err === null) ? {msg: ''} : {msg: err}
        );
    });
});



// Get user by id
router.get('/getUser/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

const productSchema = require("../models/products")

// Create product
router.post('/createProduct', async (req, res) => {
  let product = new productSchema({
    brand: req.body.brand,
    name: req.body.name,
    category: req.body.category,
    size: req.body.size,
    price: req.body.price,
    image: req.body.image,
    quantity: req.body.quantity,
    added: req.body.added,
  });
  console.log(`${product} added`);
  try {
    await product.save().then(() => res.status(200).json({ newProduct: product }));
  } catch (error) {
    res.send(`cant save new product: ${error.message}`);
  }
});
// Get All Products
router.get('/getAllProducts', async (req, res) => {
    let data = await productSchema.find()
    res.send(data)   
})

const cartSchema = require("../models/cart")

// Create cart
router.post('/addToCart', async (req, res) => {
  let cart = new cartSchema({
    brand: req.body.brand,
    name: req.body.name,
    category: req.body.category,
    size: req.body.size,
    price: req.body.price,
    image: req.body.image,
    quantity: req.body.quantity,
  });
  console.log(`${cart} added`);
  try {
    await cart.save().then(() => res.status(200).json({ newcart: cart }));
  } catch (error) {
    res.send(`cant save new cart: ${error.message}`);
  }
});
// Get All cart items
router.get('/getCartDetails', async (req, res) => {
    let data = await cartSchema.find()
    res.send(data)   
})

const storeSchema = require("../models/store")

// Create store
router.post('/createStore', async (req, res) => {
  let store = new storeSchema({
    name: req.body.name,
    logo: req.body.logo,
    cartProducts: res.cartProducts,
  });
  console.log(`${store} added`);
  try {
    await store.save().then(() => res.status(200).json({ newStore: store }));
  } catch (error) {
    res.send(`cant save new store: ${error.message}`);
  }
});
// Get All Stores
router.get('/getAllStores', async (req, res) => {
    let data = await storeSchema.find()
    res.send(data)   
})

















router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Create User Method
router.post('/register', async (req, res) => {
    const register = new Model({
        name: req.name,
        phone: req.phone,
        email: req.email,
        pin: req.pin,
        confirmPin: req.confirmPin
    })
    try {
        const dataToSave = await register.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})