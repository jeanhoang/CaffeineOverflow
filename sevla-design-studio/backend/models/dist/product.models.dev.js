"use strict";

// Import the required dependecies
var mongoose = require('mongoose');

var schema = mongoose.Schema; // Create a new schema for products

var productSchema = new schema({
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
    required: true
  },
  ProductQuantity: {
    type: String,
    required: true,
    trim: true
  },
  ProductImg: {
    type: Array,
    required: true
  }
}, {
  timestamps: true
}); // Set the schema to the mongoDB collection

var Product = mongoose.model('Product', productSchema); // Export the router to the module

module.exports = Product;