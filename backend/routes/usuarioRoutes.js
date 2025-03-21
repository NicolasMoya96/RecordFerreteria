const express = require('express');
const router = express.Router();
const { registrarUsuario, iniciarSesion } = require('../controllers/usuarioController');

// Ruta para registrar un usuario
router.post('/registro', registrarUsuario);

// Ruta para iniciar sesión
router.post('/login', iniciarSesion);

module.exports = router;