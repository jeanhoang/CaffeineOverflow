// Import the required dependecies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser')

// Initialize the backend with the server port
const app = express();
const port = process.env.PORT || 5000;

//Define a stripe instance
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(
  cors({
    origin: ["http://localhost:3000", "https://checkout.stripe.com"],
  })
);

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Connect the uri to the mongoDB 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

// Create the backend connection
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established sucessfully.")
})

///////////////////////////////////////////////////////

// Define the users schema and use it
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// Define the products schema and use it
const productRouter = require('./routes/products');
const { TEMPORARY_REDIRECT_STATUS } = require('next/dist/shared/lib/constants');
app.use('/products', productRouter);

// Define Stripe and use it
const stripeRouter = require('./routes/stripe');
app.use('/stripe', stripeRouter);

///////////////////////////////////////////////////////


// check connection for development puposes
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
