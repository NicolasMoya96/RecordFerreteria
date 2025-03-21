const express = require('express');
const router = express.Router();
const { verCarrito, agregarAlCarrito, eliminarDelCarrito } = require('../controllers/carritoController');
const verificarToken = require('../middlewares/authMiddleware');

// Ruta para ver el contenido del carrito (GET)
router.get('/', verificarToken, verCarrito);

// Ruta para agregar un producto al carrito (POST)
router.post('/agregar', verificarToken, agregarAlCarrito);

// Ruta para eliminar un producto del carrito (DELETE)
router.delete('/eliminar', verificarToken, eliminarDelCarrito);

module.exports = router;