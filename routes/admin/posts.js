const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});

router.get('/', (req, res) => {
    res.render('admin/posts/index');
});

router.get('/create', (req, res) => {
    res.render('admin/posts/create');
});

router.post('/', (req, res) => {
    console.log(req.body);

    const newPost = new Post({
        title: req.body.title,
        status: req.body.status
    });

    newPost.save().then(savedPost => {
        console.log(newPost);
        res.redirect('/admin/posts');
    }).catch(err => console.log(err));
});

module.exports = router;