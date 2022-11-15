"use strict";

// Import the required dependecies
var router = require('express').Router();

var Product = require('../models/product.models'); // POST method for adding a new product


router.route('/add').post(function _callee(req, res) {
  var ProductName, ProductDescription, ProductLongDescription, ProductPrice, ProductSize, ProductType, ProductQuantity, ProductImg, newProduct;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            ProductName = req.body.ProductName;
            ProductDescription = req.body.ProductDescription;
            ProductLongDescription = req.body.ProductLongDescription;
            ProductPrice = req.body.ProductPrice;
            ProductSize = req.body.ProductSize;
            ProductType = req.body.ProductType;
            ProductQuantity = req.body.ProductQuantity;
            ProductImg = req.body.ProductImg;
            newProduct = new Product({
              ProductName: ProductName,
              ProductDescription: ProductDescription,
              ProductLongDescription: ProductLongDescription,
              ProductPrice: ProductPrice,
              ProductSize: ProductSize,
              ProductType: ProductType,
              ProductQuantity: ProductQuantity,
              ProductImg: ProductImg
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
}); // GET method for getting all the products

router.route('/').get(function _callee2(req, res) {
  var total;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Product.count({}));

        case 2:
          total = _context2.sent;
          res.set({
            'X-Total-Count': total,
            'Access-Control-Expose-Headers': 'X-Total-Count'
          });
          Product.find().then(function (products) {
            return res.json(products);
          })["catch"](function (err) {
            return res.status(400).json('Error: ' + err);
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // GET method for finding an specific product

router.route('/:ProductName').get(function (req, res) {
  Product.find({
    ProductName: req.params['ProductName']
  }).then(function (product) {
    return res.json(product);
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
}); // PUT method for updating a product

router.route('/update/:ProductName').put(function _callee3(req, res) {
  var ProductName, ProductDescription, ProductLongDescription, ProductPrice, ProductSize, ProductType, ProductQuantity, ProductImg;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          try {
            ProductName = req.body.ProductName;
            ProductDescription = req.body.ProductDescription;
            ProductLongDescription = req.body.ProductLongDescription;
            ProductPrice = req.body.ProductPrice;
            ProductSize = req.body.ProductSize;
            ProductType = req.body.ProductType;
            ProductQuantity = req.body.ProductQuantity;
            ProductImg = req.body.ProductImg;
            Product.updateOne({
              ProductName: req.params['ProductName']
            }, {
              $set: {
                ProductName: ProductName,
                ProductDescription: ProductDescription,
                ProductLongDescription: ProductLongDescription,
                ProductPrice: ProductPrice,
                ProductSize: ProductSize,
                ProductType: ProductType,
                ProductQuantity: ProductQuantity,
                ProductImg: [ProductImg]
              }
            }).then(function (product) {
              return res.json(product);
            })["catch"](function (err) {
              return res.status(400).json('Error: ' + err);
            });
          } catch (_unused2) {
            res.status(400).json('Error: ' + err);
          }

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // POST method for deleting an specific product

router.route('/delete/:ProductName')["delete"](function (req, res) {
  Product.deleteOne({
    ProductName: req.params['ProductName']
  }).then(function (product) {
    return res.json(product);
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
}); // POST method for deleting many products

router.route('/deleteMany')["delete"](function (req, res) {
  Product.deleteMany({
    ProductName: {
      $in: req.body.id
    }
  }).then(function (product) {
    return res.json(product);
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
}); // Export the router to the module

module.exports = router;