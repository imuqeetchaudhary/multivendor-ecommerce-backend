const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const { authentication } = require('../middlewares/isAuth');

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/all', authentication, userController.getAllUsers);

module.exports = router;
