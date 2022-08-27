const router = require('express').Router();
const connection = require('./../../../config/connection');
const moment = require('moment');
const { User, Blog } = require('./../../../models')

router.get('/', async (req, res) => {
    try {
        const isLoggedIn = req.session.isLoggedIn;
    const currentUser = req.session.user
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
    res.render('blogposts', { isLoggedIn, everyBlog})
    } catch (error) {
        res.status(500).json({error})
    }
});

router.post('/post', async (req, res) => {
    try {
        const isLoggedIn = req.session.isLoggedIn;
        const newPost = await Blog.create({
            blogTitle: req.body.blogTitle,
            blogPost: req.body.blogPost,
            userId: req.session.user.id,
            datePosted: moment().format('YYYY-MM-DD')
        })
        res.send(newPost)
    } catch (error) {
        res.status(500).json({error})
    }
    
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedBlog = await Blog.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(deletedBlog);
    } catch (error) {
        res.status(500).json({error}) 
    }

});

router.put('/edit/:id', async (req,res) => {
    try {
        const updatedBlog = await Blog.update(
            {
                blogTitle: req.body.blogTitle,
                blogPost: req.body.blogPost
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.send(updatedBlog); 
    } catch (error) {
        res.status(500).json({error})
    }
})

module.exports = router;