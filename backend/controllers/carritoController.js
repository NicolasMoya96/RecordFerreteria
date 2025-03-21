const Carrito = require('../models/Carrito');
const Producto = require('../models/Producto');

// Ver contenido del carrito
exports.verCarrito = async (req, res) => {
    try {
        const carrito = await Carrito.findAll({
            where: { id_usuario: req.usuarioId },
            include: Producto
        });
        res.json(carrito);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener el carrito.' });
    }
};

// Agregar producto al carrito
exports.agregarAlCarrito = async (req, res) => {
    const { id_producto, cantidad } = req.body;
    try {
        const producto = await Producto.findByPk(id_producto);

        if (!producto || producto.stock < cantidad) {
            return res.status(400).json({ mensaje: 'Producto no disponible.' });
        }

        await Carrito.create({ id_usuario: req.usuarioId, id_producto, cantidad });
        res.json({ mensaje: 'Producto agregado al carrito.' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al agregar al carrito.' });
    }
};

// Eliminar producto del carrito
exports.eliminarDelCarrito = async (req, res) => {
    const { id_producto } = req.body;

    try {
        await Carrito.destroy({ where: { id_usuario: req.usuarioId, id_producto } });
        res.json({ mensaje: 'Producto eliminado del carrito.' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar del carrito.' });
    }
};