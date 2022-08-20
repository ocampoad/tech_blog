const router = require('express').Router();
const connection = require('./../../../config/connection');
const { User, Blog } = require('./../../../models')

router.get('/', async (req, res) => {
    const isLoggedIn = req.session.isLoggedIn
    console.log(req.session)
    const blogPosts = await User.findAll({
        include: [{
            model: Blog
        }]
    });
    const blogs = blogPosts.map( blogs => blogs.get({plain:true}));
    blogs.forEach( element => console.log(element.username))
    blogs.forEach( element => console.log(element.blogs))
    // const everyBlog = blogPosts.get({plain:true});
    // console.log(everyBlog)
    res.render('blogposts', {isLoggedIn, })
})

module.exports = router;