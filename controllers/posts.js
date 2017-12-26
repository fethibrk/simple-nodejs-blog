const Post = require('../models/post');

const index = (req, res, next) => {
  Post.find()
    .then(posts => res.render('home', { posts }))
    .catch(err => next(err));
};

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

const editBlogPost = (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => res.render('edit_post', { post }))
    .catch(err => next(err));
};

const updateBlogPost = (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, { $set: {
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    content: req.body.content
  }})
    .then(post => res.redirect(`/posts/${post._id}`))
    .catch(err => next(err));
};

const deleteBlogPost = (req, res, next) => {
  Post.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => next(err));
};

module.exports = {
  index,
  newBlogPost,
  createBlogPost,
  showBlogPost,
  editBlogPost,
  updateBlogPost,
  deleteBlogPost
};
