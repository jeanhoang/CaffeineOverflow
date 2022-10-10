"use strict";

// Import the required dependecies
var express = require('express');

var cors = require('cors');

var mongoose = require('mongoose');

require('dotenv').config();

var bodyParser = require('body-parser'); // Initialize the backend with the server port


var app = express();
var port = process.env.PORT || 5000;
var YOUR_DOMAIN = 'http://localhost:3000/'; //Define a stripe instance

var stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(cors({
  origin: ["http://localhost:3000", "https://checkout.stripe.com"]
}));
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

var _require = require('next/dist/shared/lib/constants'),
    TEMPORARY_REDIRECT_STATUS = _require.TEMPORARY_REDIRECT_STATUS;

app.use('/products', productRouter); // Define Stripe and use it

var stripeRouter = require('./routes/stripe');

app.use('/stripe', stripeRouter); ///////////////////////////////////////////////////////
// check connection for development puposes

app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});