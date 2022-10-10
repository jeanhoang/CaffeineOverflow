

// Import the required dependecies
const router = require('express').Router();
let Product = require('../models/product.models');


// For development purposes only
router.route('/').get((req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});


// GET method for getting all the products at once with Pagination
router.route('/send').get(async (req, res, next) => {

    try{

        let { page, size, sort } = req.query;

        // If the page is not applied in query.
        if (page <= 0) {
            page = 1;
        }
        if (size <= 0) {
            size = 10;
        }

        //  We have to make it integer because query parameter passed is string
        const limit = parseInt(size);
        const pg = parseInt(page);
  
        const prdct = await Product.find()
            .sort({ votes: 1, _id: 1 })
            .skip( pg > 0 ? ( ( pg - 1 ) * limit ) : 0 )
            .limit(limit)
            
            res.send({
                page,
                size,
                info: prdct,
            });
    }
    catch (error) {
        res.sendStatus(500);
    }
    
});


// POST method for adding a new product
router.route('/add').post(async(req, res) => {
    try {
        const ProductName = req.body.ProductName;
        const ProductDescription = req.body.ProductDescription;
        const ProductLongDescription = req.body.ProductLongDescription;
        const ProductPrice = req.body.ProductPrice;
        const ProductSize = req.body.ProductSize;
        const ProductType = req.body.ProductType;
        const ProductQuantity = req.body.ProductQuantity;
        const ProductImg = req.body.ProductImg;
        
        
        
        const newProduct = new Product({ProductName, ProductDescription, ProductLongDescription, ProductPrice, ProductSize, ProductType, ProductQuantity, ProductImg});
        newProduct.save()
        .then(() => res.json('Product added!'))
    }
    catch {
        res.status(400).json('Error: ' + err);
    }
});


// GET method for finding an specific product
router.route('/:ProductName').get((req, res) => {
    
    Product.find({ProductName: req.params['ProductName']})
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));

});

// Export the router to the module
module.exports = router;



