"use strict";

// Import the required dependecies
var router = require('express').Router();

var Product = require('../models/product.models'); // For development purposes only


router.route('/').get(function (req, res) {
  Product.find().then(function (products) {
    return res.json(products);
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
}); // GET method for getting all the products at once with Pagination

router.route('/send').get(function _callee(req, res) {
  var _req$query, page, size, sort, limit, prdct;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$query = req.query, page = _req$query.page, size = _req$query.size, sort = _req$query.sort; // If the page is not applied in query.

          if (!page) {
            // Make the Default value one.
            page = 1;
          }

          if (!size) {
            size = 10;
          } //  We have to make it integer because query parameter passed is string


          limit = parseInt(size); // We pass 1 for sorting data in ascending order using ids

          _context.next = 7;
          return regeneratorRuntime.awrap(Product.find().sort({
            votes: 1,
            _id: 1
          }).limit(limit));

        case 7:
          prdct = _context.sent;
          res.send({
            page: page,
            size: size,
            info: prdct
          });
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          res.sendStatus(500);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
}); // POST method for adding a new product

router.route('/add').post(function _callee2(req, res) {
  var ProductName, ProductDescription, ProductPrice, ProductSize, ProductType, ProductQuantity, newProduct;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {
            ProductName = req.body.ProductName;
            ProductDescription = req.body.ProductDescription;
            ProductPrice = req.body.ProductPrice;
            ProductSize = req.body.ProductSize;
            ProductType = req.body.ProductType;
            ProductQuantity = req.body.ProductQuantity;
            newProduct = new Product({
              ProductName: ProductName,
              ProductDescription: ProductDescription,
              ProductPrice: ProductPrice,
              ProductSize: ProductSize,
              ProductType: ProductType,
              ProductQuantity: ProductQuantity
            });
            newProduct.save().then(function () {
              return res.json('Product added!');
            });
          } catch (_unused) {
            res.status(400).json('Error: ' + err);
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // GET method for finding an specific product

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