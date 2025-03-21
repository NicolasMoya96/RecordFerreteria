const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'mi_clave_secreta';

// Registro de usuario
exports.registrarUsuario = async (req, res) => {
    const { nombre, correo, password } = req.body;

    try {
        const existeUsuario = await Usuario.findOne({ where: { correo } });

        if (existeUsuario) {
            return res.status(400).json({ mensaje: 'El correo ya está registrado.' });
        }

        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);

        const nuevoUsuario = await Usuario.create({ nombre, correo, password: passwordHash });
        res.json({ mensaje: 'Usuario registrado con éxito.', usuario: nuevoUsuario });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al registrar usuario.' });
    }
};

// Inicio de sesión
exports.iniciarSesion = async (req, res) => {
    const { correo, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ where: { correo } });

        if (!usuario) {
            return res.status(400).json({ mensaje: 'Correo no registrado.' });
        }

        const passwordValido = bcrypt.compareSync(password, usuario.password);

        if (!passwordValido) {
            return res.status(400).json({ mensaje: 'Contraseña incorrecta.' });
        }

        const token = jwt.sign({ id: usuario.id }, SECRET_KEY, { expiresIn: '2h' });
        res.json({ mensaje: 'Inicio de sesión exitoso.', token });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al iniciar sesión.' });
    }
};