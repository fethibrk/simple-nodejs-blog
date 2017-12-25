const express = require('express');

const router = express.Router();
const posts = require('../controllers/posts');

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/posts/new', posts.newBlogPost);

router.post('/posts', posts.createBlogPost);

module.exports = router;
