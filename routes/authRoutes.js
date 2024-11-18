const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// Rota para registro de usuário
router.post('/register', registerUser);

// Rota para login de usuário
router.post('/login', loginUser);

module.exports = router;
