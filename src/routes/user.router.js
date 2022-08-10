const router = require('express').Router();
const userController = require('../controller/user.controller');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
// router.post('/login', userController);

module.exports = router;
