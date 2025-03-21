const DetalleVenta = require('../models/DetalleVenta');

// Obtener todos los detalles de ventas
exports.obtenerDetallesVenta = async (req, res) => {
    try {
        const detalles = await DetalleVenta.findAll();
        res.json(detalles);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener detalles de ventas' });
    }
};

// Crear un nuevo detalle de venta
exports.crearDetalleVenta = async (req, res) => {
    try {
        const detalle = await DetalleVenta.create(req.body);
        res.json(detalle);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear detalle de venta' });
    }
};