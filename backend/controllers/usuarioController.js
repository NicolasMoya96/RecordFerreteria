const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

// Registro de usuario
const registrarUsuario = async (req, res) => {
    try {
        const { nombre, correo, password } = req.body;

        // Verificar si el usuario ya existe
        const usuarioExistente = await Usuario.findOne({ where: { correo } });
        if (usuarioExistente) {
            return res.status(400).json({ mensaje: 'El usuario ya está registrado' });
        }

        // Hashear contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear usuario
        const nuevoUsuario = await Usuario.create({
            nombre,
            correo,
            password: hashedPassword,
        });

        res.status(201).json({ mensaje: 'Usuario registrado exitosamente', usuario: nuevoUsuario });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al registrar usuario', error });
    }
};

// Inicio de sesión de usuario
const iniciarSesion = async (req, res) => {
    try {
        const { correo, password } = req.body;

        // Verificar si el usuario existe
        const usuario = await Usuario.findOne({ where: { correo } });
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        // Verificar contraseña
        const esValido = await bcrypt.compare(password, usuario.password);
        if (!esValido) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        // Generar token
        const token = jwt.sign({ id: usuario.id }, 'tu_secreto_jwt', { expiresIn: '1h' });

        res.json({ mensaje: 'Inicio de sesión exitoso', token });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al iniciar sesión', error });
    }
};

module.exports = {
    registrarUsuario,
    iniciarSesion,
};