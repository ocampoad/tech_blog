const router = require('express').Router();
const { User } = require('./../../../models')

router.get('/', async (req, res) => {
    const isLoggedIn = req.session.isLoggedIn
    res.render('signin', { isLoggedIn });
});

router.get('/signup', async (req, res) => {
    const isLoggedIn = req.session.isLoggedIn
    res.render('signup', { isLoggedIn });
});

router.get('/logout', async (req, res) => {
    const isLoggedIn = req.session.isLoggedIn;
    if (!req.session.isLoggedIn) {
        return res.redirect('/')
    }
    res.render('signout', { isLoggedIn })

});

router.post('/signup', async (req, res) => {
    const newUser = await User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    req.session.save(() => {
        req.session.user = newUser.get({plain: true}).id;
        req.session.isLoggedIn = true;
        res.json({ success: true });
    });
});

router.post('/signin', async (req, res) => {
    const currentUser = await User.findOne({where: {username: req.body.username}})
    console.log(currentUser.get({plain: true}))
    req.session.save(() => {
        req.session.user = req.user;
        req.session.isLoggedIn = true;
        res.json({ success: true });
    });
});

router.post('/signout', async (req, res) => {

    req.session.destroy(() => {
        res.status(204).end();
    })
});

module.exports = router; 
