const router = require('express').Router();
const { User } = require('./../../../models')

router.get('/', async (req, res) => {
    const isLoggedIn = req.session.isLoggedIn
    res.render('signup', {isLoggedIn });
});

router.post('/signup', async (req, res) => {
    const newUser = await User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    req.session.save(() => {
        req.session.user = req.user;
        req.session.isLoggedIn = true;
        res.json({ success: true });
    });
});

router.post('/signin', async (req, res) => {

    req.session.save(() => {
        req.session.user = req.user;
        req.session.isLoggedIn = true;
        res.json({ success: true });
    });
    res.send(newUser)
});


module.exports = router; 
