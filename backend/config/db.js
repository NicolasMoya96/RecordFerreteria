const { Sequelize } = require('sequelize');

const db = new Sequelize('RecordFerreteria', 'root', 'An1023892%', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = db;