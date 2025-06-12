const router = require('express').Router();

const {getAllPosts, createPost, getPostsByAutorId} = require('../../controllers/posts.controller');


router.get('/', getAllPosts);
router.get("/autor/:id", getPostsByAutorId);
router.post('/create', createPost);


module.exports = router;