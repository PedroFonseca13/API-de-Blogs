const router = require('express').Router();
const userController = require('../controller/user.controller');
const validateBody = require('../middleware/validateBody');

router.get('/', userController.getAllUsers);
router.post('/', validateBody, userController.createUser);
// router.post('/login', userController);

module.exports = router;
