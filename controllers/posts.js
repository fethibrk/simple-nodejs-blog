const Post = require('../models/post');

const newBlogPost = (req, res) => {
  res.render('new_post');
};

const createBlogPost = (req, res, next) => {
  Post.create({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    content: req.body.content
  })
    .then(post => res.redirect(`/posts/${post._id}`))
    .catch(err => next(err));
};

const showBlogPost = (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => res.render('show_post', { post }))
    .catch(err => next(err));
};

module.exports = {
  newBlogPost,
  createBlogPost,
  showBlogPost
};
