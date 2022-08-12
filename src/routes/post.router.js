const router = require('express').Router();
const postController = require('../controller/post.controller');
const validateToken = require('../middleware/jwtMiddleware');

router.get('/', validateToken, postController.getAllPosts);

module.exports = router;
