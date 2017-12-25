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
    .then(post => res.status(201).json(post))
    .catch(err => next(err));
};

module.exports = {
  newBlogPost,
  createBlogPost
};
