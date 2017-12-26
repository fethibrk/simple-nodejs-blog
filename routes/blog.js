const express = require('express');

const router = express.Router();
const posts = require('../controllers/posts');

router.get('/', posts.index);
router.get('/posts/new', posts.newBlogPost);
router.post('/posts', posts.createBlogPost);
router.get('/posts/:id', posts.showBlogPost);

module.exports = router;
