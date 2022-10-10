// Import the required dependecies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser')


// Initialize the backend with the server port
const app = express();
const port = process.env.PORT || 5000;

const YOUR_DOMAIN = 'http://localhost:3000/';

//Define a stripe instance
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//app.use(cors());
//app.options('*', cors());
//app.use(cors({origin:true,credentials: true}));

app.use(
  cors({
    origin: ["http://localhost:3000", "https://checkout.stripe.com"],
  })
);

// app.use(function (req, res, next) {

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

// const stripeRouter = require('./routes/stripe');
// app.use('/stripe', stripeRouter);

///////////////////////////////////////////////////////


// check connection for development puposes
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})

///////////////////////////////////

//Handles stripe
app.post("/stripe", cors(), async (req, res) => {
  if (req.method === 'POST') {

    //Define request body data
    const data = req.body;
    console.log(data);

    try {
      //An array with different objects where quantity and price can be specified
      const params = {
        //Passing stripe elements
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        //Extracting values from req.body
        line_items: data.map((item) => {
          return {
            price_data: {
              currency: 'CAD',
              product_data: {
                name: item.name,
              },
              unit_amount: Math.round(item.price * 100), //Make sure price is rounded for Stripe
            },
            //Allows user to adjust the quantity value in Stripe
            adjustable_quantity: {
              enabled: true,
              minimum: 0,
            },
            quantity: item.amount
          }
        }),
        mode: 'payment',

        //Redirect to main page with success or canceled in URL
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
      }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      //res.redirect(303, session.url);
      //Define session to return
      res.json({session: session});

    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  }
});


