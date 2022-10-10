// Define the required variables for stripe
const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const YOUR_DOMAIN = 'http://localhost:3000';


//Handles stripe
router.route("/").post(async (req, res) => {
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
          success_url: `${YOUR_DOMAIN}/success`,
          cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        }
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create(params);

        //Define session to return
        res.json({session: session});
  
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    }
  });


module.exports = router;
