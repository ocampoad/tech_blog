const router = require('express').Router();
const { User } = require('./../../../models')

router.get('/', async (req, res) => {
    res.render('signup');
});

router.post('/signup', async (req, res) => {
    const newUser = await User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    res.send(newUser)
});


// req.session.save(() => {
//     req.session.user = req.user;
//     req.session.isLoggedIn = true;
//     res.json({ success: true });
// });

module.exports = router; 
