const router = require('express').Router();
const connection = require('./../../../config/connection');
const { User, Blog } = require('./../../../models')

router.get('/', async (req, res) => {
    const isLoggedIn = req.session.isLoggedIn
    console.log(req.session)
    const blogPosts = await User.findAll();
    const blogs = blogPosts.map( blogs => blogs.get({plain:true}));
    console.log(blogs)
    // const everyBlog = blogPosts.get({plain:true});
    // console.log(everyBlog)
    res.render('blogposts', {isLoggedIn, })
})

module.exports = router;