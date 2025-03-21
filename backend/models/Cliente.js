const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Usuario = require('./Usuario');

const Cliente = db.define('Cliente', {
    id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'Clientes',
    timestamps: false
});

// Relación: Un cliente está asociado a un usuario
Cliente.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = Cliente;