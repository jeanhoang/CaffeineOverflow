const router = require('express').Router();
let User = require('../models/user.models');
const bcrypt = require('bcrypt');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async(req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const username = req.body.username;
        const newUser = new User({username, hashedPassword});
        newUser.save()
        .then(() => res.json('User added!'))
    }
    catch {
        res.status(400).json('Error: ' + err);
    }
});

router.route('/:username').get((req, res) => {
    
    User.find({username: req.body.username})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;

