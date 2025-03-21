const express = require('express');
const router = express.Router();
const { obtenerDetallesVenta, crearDetalleVenta } = require('../controllers/detalleVentaController');

router.get('/', obtenerDetallesVenta);
router.post('/', crearDetalleVenta);

module.exports = router;