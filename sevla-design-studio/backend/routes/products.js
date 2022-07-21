// Import the required dependecies
const router = require('express').Router();
let Product = require('../models/product.models');


//
// For development purposes only
//
router.route('/').get((req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});


// 
// POST method for adding a new product
//
router.route('/add').post(async(req, res) => {
    try {
        const item = req.body.item;
        const quantity = req.body.quantity;
        const price = req.body.price;
        const description = req.body.description;
        const size = req.body.size;
        const style = req.body.style;

        const newProduct = new Product({item, quantity, price, description, size, style});
        newProduct.save()
        .then(() => res.json('Product added!'))
    }
    catch {
        res.status(400).json('Error: ' + err);

    }
});



// 
// GET method for finding an specific product
//
router.route('/:item').get((req, res) => {
    
    Product.find({item: req.body.item})
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));

});


// Export the router to the module
module.exports = router;

