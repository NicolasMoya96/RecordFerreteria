const express = require('express');
const app = express();
const db = require('./config/db');
const cors = require('cors');
const productoRoutes = require('./routes/productoRoutes');
const carritoRoutes = require('./routes/carritoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
require('dotenv').config();

// Configuraciones
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
db.authenticate()
    .then(() => console.log('✅ Conexión exitosa con la base de datos'))
    .catch((error) => console.error('❌ Error al conectar con la base de datos:', error));

// Sincronizar modelos con la base de datos
db.sync({ force: false })
    .then(() => console.log('✅ Modelos sincronizados con la base de datos'))
    .catch((error) => console.error('❌ Error al sincronizar los modelos:', error));

// Rutas
app.use('/api/productos', productoRoutes);
app.use('/api/carrito', carritoRoutes);
app.use('/api/usuarios', usuarioRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('🔥 Bienvenido a la API de RecordFerreteria');
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});