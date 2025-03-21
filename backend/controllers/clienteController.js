const Cliente = require('../models/Cliente');

// Obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener clientes' });
    }
};

// Crear un cliente nuevo
exports.crearCliente = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear cliente' });
    }
};