const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);
router.get('/', async (req, res) => {
    const isLoggedIn = req.session.isLoggedIn
    res.render('homepage', {isLoggedIn });
});

module.exports = router;