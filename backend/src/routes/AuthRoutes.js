const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

router.post('/register', authController.register);
router.get('/users', authController.getUsers);
router.get('/users/:id', authController.getUser);
router.delete('/users/:id', authController.deleteUser);
router.put('/users/:id', authController.updateUser);

module.exports = router;