const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Cliente = require('./Cliente');

const Venta = db.define('Venta', {
    id_venta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    tableName: 'Ventas',
    timestamps: false
});

// Relación: Una venta está asociada a un cliente
Venta.belongsTo(Cliente, { foreignKey: 'id_cliente' });

module.exports = Venta;