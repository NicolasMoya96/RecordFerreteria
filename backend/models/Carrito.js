const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Producto = require('./Producto');

const Carrito = db.define('Carrito', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Producto,
            key: 'id_producto'  // Corregimos aquí la referencia correcta
        }
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
}, {
    timestamps: true
});

// Configuramos la relación correctamente
Carrito.belongsTo(Producto, {
    foreignKey: 'id_producto',
    targetKey: 'id_producto'
});

module.exports = Carrito;