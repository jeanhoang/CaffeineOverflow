
// Import the required dependecies
const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Create a new schema for products
const productSchema = new schema({

    
    ProductName: {
        type: String,
        required: true,
        trim: true
    },
    ProductDescription: {
        type: String,
        required: true
    },
    ProductLongDescription: {
        type: String,
        required: false
      },
    ProductPrice: {
        type: Number,
        required: true
    },
    ProductSize: {
        type: String,
        required: false
    },
    ProductType: {
        type: String,
        required: false
    },
    ProductQuantity: {
        type: String,
        required: true,
        trim: true
    },
    ProductImg: {
        type: Array,
        required: false
    }
},{
    timestamps: true,
});

// Set the schema to the mongoDB collection
const Product = mongoose.model('Product', productSchema);

// Export the router to the module
module.exports = Product; 


