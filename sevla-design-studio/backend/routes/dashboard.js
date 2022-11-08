// Import the required dependecies
const router = require('express').Router();
let Product = require('../models/product.models');


// GET method for getting all the products
router.route('/').get(async (req, res) => {
    const total = await Product.count({});
    res.set({
        'X-Total-Count': total,
        'Access-Control-Expose-Headers': 'X-Total-Count'
    })
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET method for finding an specific product
router.route('/:ProductName').get((req, res) => {

    Product.find({ ProductName: req.params['ProductName'] })
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));

});


// POST method for adding a new product
router.route('/add').post(async (req, res) => {
    try {
        const ProductName = req.body.ProductName;
        const ProductDescription = req.body.ProductDescription;
        const ProductLongDescription = req.body.ProductLongDescription;
        const ProductPrice = req.body.ProductPrice;
        const ProductSize = req.body.ProductSize;
        const ProductType = req.body.ProductType;
        const ProductQuantity = req.body.ProductQuantity;
        const ProductImg = req.body.ProductImg;



        const newProduct = new Product({ ProductName, ProductDescription, ProductLongDescription, ProductPrice, ProductSize, ProductType, ProductQuantity, ProductImg });
        newProduct.save()
            .then(() => res.json('Product added!'))


    }
    catch {
        res.status(400).json('Error: ' + err);
    }
});

// POST method for deleting an specific product
router.route('/delete/:ProductName').delete((req, res) => {
    Product.deleteOne({ ProductName: req.params['ProductName'] })
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));

});

// POST method for deleting many products
router.route('/deleteMany').delete((req, res) => {
    Product.deleteMany({ ProductName: {$in: req.body.id} })
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});


// PUT method for updating a product
router.route('/update/:ProductName').put(async (req, res) => {
    try {
        const ProductName = req.body.ProductName;
        const ProductDescription = req.body.ProductDescription;
        const ProductLongDescription = req.body.ProductLongDescription;
        const ProductPrice = req.body.ProductPrice;
        const ProductSize = req.body.ProductSize;
        const ProductType = req.body.ProductType;
        const ProductQuantity = req.body.ProductQuantity;
        const ProductImg = req.body.ProductImg;


        Product.updateOne({ ProductName: req.params['ProductName'] }, { $set: { ProductName: ProductName, ProductDescription: ProductDescription, ProductLongDescription: ProductLongDescription, ProductPrice: ProductPrice, ProductSize: ProductSize, ProductType: ProductType, ProductQuantity: ProductQuantity, ProductImg: [ProductImg] } })
            .then(product => res.json(product))
            .catch(err => res.status(400).json('Error: ' + err));

    }
    catch {
        res.status(400).json('Error: ' + err);
    }
});



// Export the router to the module
module.exports = router;
