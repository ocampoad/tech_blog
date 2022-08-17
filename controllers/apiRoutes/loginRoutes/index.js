const router = require('express').Router();
const { Users } = require('./../../../models')

router.get('/', async (req, res) => {
    res.render('signup');
});

router.post('/signup', async (req, res) => {

    const newUser = await Users.create({
        username: req.body.username,
        password: req.body.password
    });

    res.send(newUser)
});

module.exports = router; 
