"use strict";

// Import the required dependecies
var mongoose = require('mongoose');

var schema = mongoose.Schema; // Create a new schema for users

var userSchema = new schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, {
  timestamps: true
}); // Set the schema to the mongoDB collection

var User = mongoose.model('User', userSchema); // Export the router to the module

module.exports = User;