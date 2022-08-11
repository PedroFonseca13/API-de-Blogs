const router = require('express').Router();
const categoriesController = require('../controller/categories.controller');
const categoriesMiddleware = require('../middleware/categoriesMiddleware');
const validateToken = require('../middleware/jwtMiddleware');

router.post('/', categoriesMiddleware, validateToken, categoriesController.createCategory);

module.exports = router;
