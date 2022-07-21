// Import the required dependecies
const router = require('express').Router();
let User = require('../models/user.models');
const bcrypt = require('bcrypt');

//
// For development purposes only
//
router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


// 
// POST method for adding a new user
//
router.route('/add').post(async(req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const password = await bcrypt.hash(req.body.password, salt)
        const username = req.body.username;
        const newUser = new User({username, password});
        newUser.save()
        .then(() => res.json('User added!'))
    }
    catch {
        res.status(400).json('Error: ' + err);

    }
});


// 
// POST method for finding an specific user for login purposes
//
router.route('/login').post(async(req, res) => {
    const user = await User.findOne({username: req.body.username})
    if (user == null) {
        return res.status(400).json('User not found');
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.json('Credentials matched')
        } else {
            res.json('Wrong password')
        }
    }
    catch {
        res.status(400).json('Error');
    }
    
});

// 
// POST method for finding an specific user for login purposes
//
router.route('/:username').get((req, res) => {
    
    User.find({username: req.body.username})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));

});


// Export the router to the module
module.exports = router;

