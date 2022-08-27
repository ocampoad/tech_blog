const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);
router.get('/', async (req, res) => {
        try {
            const isLoggedIn = req.session.isLoggedIn
            res.render('homepage', {isLoggedIn }); 
        } catch (error) {
            res.status(500).json({ error })
        }
    
});

module.exports = router;