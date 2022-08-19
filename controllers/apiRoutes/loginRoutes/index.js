const router = require('express').Router();
const { User } = require('./../../../models')

router.get('/', async (req, res) => {
    const isLoggedIn = req.session.isLoggedIn
    res.render('signup', { isLoggedIn });
});

router.get('/logout', async (req, res) => {
    const isLoggedIn = req.session.isLoggedIn;
    res.render('signout', { isLoggedIn })

})

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

router.post('/signout', async (req, res) => {
    req.session.destroy(() => {
        res.status(204).end();
    })
});



module.exports = router; 
