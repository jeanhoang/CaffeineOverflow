// Import the required dependecies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Initialize the backend with the server port
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

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
app.use('/products', productRouter);

///////////////////////////////////////////////////////


// check connection for development puposes
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
}) 


