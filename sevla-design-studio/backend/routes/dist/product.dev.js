"use strict";

// Import the required dependecies
var router = require('express').Router();

var Product = require('../models/product.models'); // const bcrypt = require('bcrypt');
//
// For development purposes only
//


router.route('/').get(function (req, res) {
  Product.find().then(function (products) {
    return res.json(products);
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
}); // 
// POST method for adding a new user
//

router.route('/add').post(function _callee(req, res) {
  var item, quantity, price, description, size, style, newProduct;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            item = req.body.item;
            quantity = req.body.quantity;
            price = req.body.price;
            description = req.body.description;
            size = req.body.size;
            style = req.body.style;
            newProduct = new Product({
              item: item,
              quantity: quantity,
              price: price,
              description: description,
              size: size,
              style: style
            });
            newProduct.save().then(function () {
              return res.json('Product added!');
            });
          } catch (_unused) {
            res.status(400).json('Error: ' + err);
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}); // 
// POST method for finding an specific user for login purposes
//
// router.route('/login').post(async(req, res) => {
//     const user = await User.findOne({username: req.body.username})
//     if (user == null) {
//         return res.status(400).json('User not found');
//     }
//     try {
//         if (await bcrypt.compare(req.body.password, user.password)) {
//             res.json('Credentials matched')
//         } else {
//             res.json('Wrong password')
//         }
//     }
//     catch {
//         res.status(400).json('Error');
//     }
// });
// 
// POST method for finding an specific user for login purposes
//

router.route('/:item').get(function (req, res) {
  Product.find({
    item: req.body.item
  }).then(function (product) {
    return res.json(product);
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
}); // Export the router to the module

module.exports = router;