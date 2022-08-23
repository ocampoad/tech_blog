const router = require('express').Router();
const connection = require('./../../../config/connection');
const moment = require('moment');
const { User, Blog } = require('./../../../models')

router.get('/', async (req, res) => {
    const isLoggedIn = req.session.isLoggedIn;
    const currentUser = req.session.user
    console.log(currentUser)
    const blogPosts = await User.findAll({
        include: [{
            model: Blog
        }]
    });
    const blogs = blogPosts.map(blogs => blogs.get({ plain: true }));
    let everyBlog = []
    blogs.forEach(element => everyBlog.push(element));
    everyBlog.forEach( element => {
        if (isLoggedIn) {
            if (element.username === currentUser.username) {
                element.isUser = 1
            } else {
                element.isUser = 0
            }
        } else {
            element.isUser = 0
        }
    });
    console.log(everyBlog)
    res.render('blogposts', { isLoggedIn, everyBlog})
});

router.post('/post', async (req, res) => {
    const isLoggedIn = req.session.isLoggedIn;
    const newPost = await Blog.create({
        blogTitle: req.body.blogTitle,
        blogPost: req.body.blogPost,
        userId: req.session.user.id,
        datePosted: moment().format('YYYY-MM-DD')
    })
    res.send(newPost)
})

router.delete('/delete/:id', async (req, res) => {
    const deletedBlog = await Blog.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json(deletedBlog);
})

module.exports = router;