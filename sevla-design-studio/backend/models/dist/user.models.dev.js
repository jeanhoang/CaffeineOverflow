"use strict";

var mongoose = require('mongoose');

var schema = mongoose.Schema;
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
});
var User = mongoose.model('User', userSchema);
module.exports = User;