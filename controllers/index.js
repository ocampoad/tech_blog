const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);
router.get('/', async (req, res) => {
    res.render('homepage');
});

module.exports = router;