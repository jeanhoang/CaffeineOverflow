"use strict";

// Import the required dependecies
var mongoose = require('mongoose');

var schema = mongoose.Schema; // Create a new schema for products

var paginationSchema = new schema({
  // << VALUES TO BE CHANGED IN FUTURE >>
  Page: {
    type: String,
    required: true // minlength: 3

  },
  Size: {
    type: String,
    required: true // minlength: 6

  }
}, {
  timestamps: true
}); // Set the schema to the mongoDB collection

var Pagination = mongoose.model('Pagination', paginationSchema); // Export the router to the module

module.exports = Pagination;