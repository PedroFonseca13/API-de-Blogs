const router = require('express').Router();
const userController = require('../controller/user.controller');
const validateBody = require('../middleware/validateBody');
const validateToken = require('../middleware/jwtMiddleware');

router.get('/', validateToken, userController.getAllUsers);
router.post('/', validateBody, userController.createUser);
// router.post('/login', userController);

module.exports = router;
