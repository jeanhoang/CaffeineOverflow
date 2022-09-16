"use strict";

// Import the required dependecies
var mongoose = require('mongoose');

var schema = mongoose.Schema; // Create a new schema for products

var productSchema = new schema({
  // << VALUES TO BE CHANGED IN FUTURE >>
  ProductName: {
    type: String,
    required: true,
    trim: true // minlength: 3

  },
  ProductDescription: {
    type: String,
    required: true // minlength: 6

  },
  ProductPrice: {
    type: String,
    required: true // minlength: 6

  },
  ProductSize: {
    type: String,
    required: true // minlength: 6

  },
  ProductType: {
    type: String,
    required: true // minlength: 6

  },
  ProductQuantity: {
    type: String,
    required: true,
    trim: true // minlength: 3

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