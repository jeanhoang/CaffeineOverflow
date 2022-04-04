const router = require('express').Router();
let User = require('../models/user.models');
const bcrypt = require('bcrypt');


//for development purposes only
router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

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

router.route('/:username').get((req, res) => {
    
    User.find({username: req.body.username})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;

