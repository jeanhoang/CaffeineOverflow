
// const router = require('express').Router();

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// router.route('/stripe').post(cors(), async(req, res) => {
//   if (req.method === 'POST') {
//     console.log(req.body.cartItems);
    
//     try {
//         //An array with different objects where quantity and price can be specified
//         const params = {
//             //Passing stripe elements
//             submit_type: 'pay',
//             mode: 'payment',
//             payment_method_types:['card'],
//             billing_address_collection:'auto',

//             //Passing the products from Cart
//             line_items: [
//               {
//                 // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//                 price: 10000,
//                 quantity: 1,
//               },
//             ],
//             mode: 'payment',
//             success_url: `${req.headers.origin}/?success=true`,
//             cancel_url: `${req.headers.origin}/?canceled=true`,
//           }
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create(params);
//       res.redirect(303, session.url);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// });


//module.exports = router;