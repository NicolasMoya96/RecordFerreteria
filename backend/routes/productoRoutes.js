const express = require('express');
const router = express.Router();
const { obtenerProductos, crearProducto } = require('../controllers/productoController');
const verificarToken = require('../middlewares/authMiddleware');

router.get('/', obtenerProductos);
router.post('/crear', verificarToken, crearProducto);

module.exports = router;