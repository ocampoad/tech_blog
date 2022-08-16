const router = require('express').Router();
const connection = require('./../../../config/connection');

router.get('/', async (req, res) => {
    console.log('i got hit!')
})

module.exports = router;