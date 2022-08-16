const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/blogs', blogRoutes);
router.use('/login', loginRoutes);

module.exports = router;