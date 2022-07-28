"use strict";

// Import the required dependecies
var express = require('express');

var cors = require('cors');

var mongoose = require('mongoose');

require('dotenv').config();

var bodyParser = require('body-parser'); // Initialize the backend with the server port


var app = express();
var port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json()); // Connect the uri to the mongoDB 

var uri = process.env.ATLAS_URI;
mongoose.connect(uri); // Create the backend connection

var connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB database connection established sucessfully.");
}); ///////////////////////////////////////////////////////
// Define the users schema and use it

var usersRouter = require('./routes/users');

app.use('/users', usersRouter); // Define the products schema and use it

var productRouter = require('./routes/products');

app.use('/products', productRouter); ///////////////////////////////////////////////////////
// check connection for development puposes

app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});