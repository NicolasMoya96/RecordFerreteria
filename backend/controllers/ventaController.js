const Venta = require('../models/Venta');

// Obtener todas las ventas
exports.obtenerVentas = async (req, res) => {
    try {
        const ventas = await Venta.findAll();
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener ventas' });
    }
};

// Crear una nueva venta
exports.crearVenta = async (req, res) => {
    try {
        const venta = await Venta.create(req.body);
        res.json(venta);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear venta' });
    }
};