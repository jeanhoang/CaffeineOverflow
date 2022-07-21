"use strict";

// Import the required dependecies
var router = require('express').Router();

var User = require('../models/user.models');

var bcrypt = require('bcrypt'); //
// For development purposes only
//


router.route('/').get(function (req, res) {
  User.find().then(function (users) {
    return res.json(users);
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
}); // 
// POST method for adding a new user
//

router.route('/add').post(function _callee(req, res) {
  var salt, password, username, newUser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(bcrypt.genSalt());

        case 3:
          salt = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(bcrypt.hash(req.body.password, salt));

        case 6:
          password = _context.sent;
          username = req.body.username;
          newUser = new User({
            username: username,
            password: password
          });
          newUser.save().then(function () {
            return res.json('User added!');
          });
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          res.status(400).json('Error: ' + err);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}); // 
// POST method for finding an specific user for login purposes
//

router.route('/login').post(function _callee2(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(User.findOne({
            username: req.body.username
          }));

        case 2:
          user = _context2.sent;

          if (!(user == null)) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt("return", res.status(400).json('User not found'));

        case 5:
          _context2.prev = 5;
          _context2.next = 8;
          return regeneratorRuntime.awrap(bcrypt.compare(req.body.password, user.password));

        case 8:
          if (!_context2.sent) {
            _context2.next = 12;
            break;
          }

          res.json('Credentials matched');
          _context2.next = 13;
          break;

        case 12:
          res.json('Wrong password');

        case 13:
          _context2.next = 18;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](5);
          res.status(400).json('Error');

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[5, 15]]);
}); // 
// POST method for finding an specific user for login purposes
//

router.route('/:username').get(function (req, res) {
  User.find({
    username: req.body.username
  }).then(function (user) {
    return res.json(user);
  })["catch"](function (err) {
    return res.status(400).json('Error: ' + err);
  });
}); // Export the router to the module

module.exports = router;