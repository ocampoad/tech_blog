const router = require('express').Router();
const connection = require('./../../../config/connection');
const { User, Blog } = require('./../../../models')

router.get('/', async (req, res) => {
    const isLoggedIn = req.session.isLoggedIn
    const blogPosts = await User.findAll({
        include: [{
            model: Blog
        }]
    });
    const blogs = blogPosts.map(blogs => blogs.get({ plain: true }));
    let everyBlog = []
    blogs.forEach(element => everyBlog.push(element));
    res.render('blogposts', { isLoggedIn, everyBlog })
});

router.post('/post', async (req, res) => {
    const isLoggedIn = req.session.isLoggedIn;
    const newPost = await Blog.create({
        blogTitle: req.body.blogTitle,
        blogPost: req.body.blogPost,
        userId: req.session.user.id
    })
    res.send(newPost)
})

module.exports = router;