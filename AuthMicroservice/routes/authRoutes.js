const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.get('/users', authController.getAllUsers);
router.post('/users', authController.createUser);
router.get('/users/:id', authController.getUserById);

module.exports = router;
