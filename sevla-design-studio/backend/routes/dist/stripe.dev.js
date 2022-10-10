"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var router = require('express').Router();

var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

var YOUR_DOMAIN = 'http://localhost:3000/'; //Handles stripe

router.route("/").post(function _callee(req, res) {
  var data, _params, params, session;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method === 'POST')) {
            _context.next = 14;
            break;
          }

          //Define request body data
          data = req.body;
          console.log(data);
          _context.prev = 3;
          //An array with different objects where quantity and price can be specified
          params = (_params = {
            //Passing stripe elements
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            //Extracting values from req.body
            line_items: data.map(function (item) {
              return {
                price_data: {
                  currency: 'CAD',
                  product_data: {
                    name: item.name
                  },
                  unit_amount: Math.round(item.price * 100) //Make sure price is rounded for Stripe

                },
                //Allows user to adjust the quantity value in Stripe
                adjustable_quantity: {
                  enabled: true,
                  minimum: 0
                },
                quantity: item.amount
              };
            })
          }, _defineProperty(_params, "mode", 'payment'), _defineProperty(_params, "success_url", "".concat(YOUR_DOMAIN, "?success=true")), _defineProperty(_params, "cancel_url", "".concat(YOUR_DOMAIN, "?canceled=true")), _params); // Create Checkout Sessions from body params.

          _context.next = 7;
          return regeneratorRuntime.awrap(stripe.checkout.sessions.create(params));

        case 7:
          session = _context.sent;
          //res.redirect(303, session.url);
          //Define session to return
          res.json({
            session: session
          });
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](3);
          res.status(_context.t0.statusCode || 500).json(_context.t0.message);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 11]]);
});
module.exports = router;