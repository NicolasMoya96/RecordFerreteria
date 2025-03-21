const Producto = require('../models/Producto');

// Obtener todos los productos
exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los productos.' });
    }
};

// Crear un nuevo producto
exports.crearProducto = async (req, res) => {
    const { nombre, descripcion, precio, stock } = req.body;
    try {
        const nuevoProducto = await Producto.create({ nombre, descripcion, precio, stock });
        res.json(nuevoProducto);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el producto.' });
    }
};