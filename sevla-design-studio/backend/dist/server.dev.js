"use strict";

var express = require('express');

var cors = require('cors');

var mongoose = require('mongoose');

require('dotenv').config();

var app = express();
var port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
var uri = process.env.ATLAS_URI;
mongoose.connect(uri);
var connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB database connection established sucessfully.");
});

var usersRouter = require('./routes/users');

app.use('/users', usersRouter);
app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});