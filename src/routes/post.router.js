const router = require('express').Router();
const postController = require('../controller/post.controller');
const validateToken = require('../middleware/jwtMiddleware');
const validatePost = require('../middleware/validatePost');

router.get('/', validateToken, postController.getAllPosts);
router.post('/', validateToken, validatePost, postController.createPost);

module.exports = router;
