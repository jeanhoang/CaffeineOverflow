"use strict";

// Import the required dependecies
var router = require('express').Router();

var Product = require('../models/product.models'); //
// For development purposes only
//


router.route('/').get(function (req, res) {
  Product.find().then(function (products) {
    return res.json(products);
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
}); // 
// POST method for adding a new product
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
// GET method for finding an specific product
//

router.route('/:item').get(function (req, res) {
  Product.find({
    item: req.params['item']
  }).then(function (product) {
    return res.json(product);
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
}); // Export the router to the module

module.exports = router;