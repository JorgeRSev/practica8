const router = require('express').Router();

const {getAllPosts, createPost, getPostByIdAutor} = require('../../controllers/posts.controller');


router.get('/', getAllPosts);
router.post('/create', createPost);

module.exports = router;