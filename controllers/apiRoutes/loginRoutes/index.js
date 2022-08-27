const router = require('express').Router();
const { User } = require('./../../../models')

router.get('/', async (req, res) => {
    try {
        const isLoggedIn = req.session.isLoggedIn
        res.render('signin', { isLoggedIn });
    } catch (error) {
        res.status(500).json({ error })
    }

});

router.get('/signup', async (req, res) => {
    try {
        const isLoggedIn = req.session.isLoggedIn
        res.render('signup', { isLoggedIn });
    } catch (error) {
        res.status(500).json({ error })
    }

});

router.get('/logout', async (req, res) => {
    try {
        const isLoggedIn = req.session.isLoggedIn;
        if (!req.session.isLoggedIn) {
            return res.redirect('/')
        }
        res.render('signout', { isLoggedIn })
    } catch (error) {
        res.status(500).json({ error })
    }
  
});

router.post('/signup', async (req, res) => {
    try {
        const newUser = await User.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.user = newUser.get({ plain: true });
            req.session.isLoggedIn = true;
            res.json({ success: true });
        });
    } catch (error) {
      res.status(500).json({ error })  
    }
});

router.post('/signin', async (req, res) => {
    try {
        const currentUser = await User.findOne({ where: { username: req.body.username } })
        req.session.save(() => {
            req.session.user = currentUser.get({ plain: true });
            req.session.isLoggedIn = true;
            res.json({ success: true });
        });
    } catch (error) {
        res.status(500).json({ error })
    }
  
});

router.post('/signout', async (req, res) => {
    try {
        req.session.destroy(() => {
            res.status(204).end();
        })
    } catch (error) {
        res.status(500).json({ error })
    }

});

module.exports = router; 
