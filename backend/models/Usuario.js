const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    correo: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    contraseña: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
});

module.exports = Usuario;