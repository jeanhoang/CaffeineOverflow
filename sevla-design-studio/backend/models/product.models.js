// Import the required dependecies
const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Create a new schema for products

const productSchema = new schema({

    // << VALUES TO BE CHANGED IN FUTURE >>
    
    item: {
        type: String,
        required: true,
        trim: true,
        // minlength: 3
    },
    quantity: {
        type: String,
        required: true,
        // minlength: 6
    },
    price: {
        type: String,
        required: true,
        // minlength: 6
    },
    description: {
        type: String,
        required: true,
        // minlength: 6
    },
    size: {
        type: String,
        required: true,
        // minlength: 6
    },
    style: {
        type: String,
        required: true,
        minlength: 6
    }
},{
    timestamps: true,
});

// Set the schema to the mongoDB collection
const Product = mongoose.model('Product', productSchema);

// Export the router to the module
module.exports = Product; 