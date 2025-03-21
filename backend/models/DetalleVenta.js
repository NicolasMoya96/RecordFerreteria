const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Venta = require('./Venta');
const Producto = require('./Producto');

const DetalleVenta = db.define('DetalleVenta', {
    id_detalle: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio_unitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    tableName: 'DetallesVenta',
    timestamps: false
});

// Relaciones: Un detalle pertenece a una venta y a un producto
DetalleVenta.belongsTo(Venta, { foreignKey: 'id_venta' });
DetalleVenta.belongsTo(Producto, { foreignKey: 'id_producto' });

module.exports = DetalleVenta;