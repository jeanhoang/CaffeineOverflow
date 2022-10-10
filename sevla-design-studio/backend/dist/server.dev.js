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

var stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); //app.use(cors());
//app.options('*', cors());
//app.use(cors({origin:true,credentials: true}));


app.use(cors({
  origin: ["http://localhost:3000", "https://checkout.stripe.com"]
})); // app.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', '');
//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   // Pass to next layer of middleware
//   next();
// });

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

app.use('/products', productRouter);

var stripeRouter = require('./routes/stripe');

app.use('/stripe', stripeRouter); ///////////////////////////////////////////////////////
// check connection for development puposes

app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
}); ///////////////////////////////////
// //Handles stripe
// app.post("/stripe", cors(), async (req, res) => {
//   if (req.method === 'POST') {
//     //Define request body data
//     const data = req.body;
//     console.log(data);
//     try {
//       //An array with different objects where quantity and price can be specified
//       const params = {
//         //Passing stripe elements
//         submit_type: 'pay',
//         mode: 'payment',
//         payment_method_types: ['card'],
//         billing_address_collection: 'auto',
//         //Extracting values from req.body
//         line_items: data.map((item) => {
//           return {
//             price_data: {
//               currency: 'CAD',
//               product_data: {
//                 name: item.name,
//               },
//               unit_amount: Math.round(item.price * 100), //Make sure price is rounded for Stripe
//             },
//             //Allows user to adjust the quantity value in Stripe
//             adjustable_quantity: {
//               enabled: true,
//               minimum: 0,
//             },
//             quantity: item.amount
//           }
//         }),
//         mode: 'payment',
//         //Redirect to main page with success or canceled in URL
//         success_url: `${YOUR_DOMAIN}?success=true`,
//         cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//       }
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create(params);
//       //res.redirect(303, session.url);
//       //Define session to return
//       res.json({session: session});
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   }
// });