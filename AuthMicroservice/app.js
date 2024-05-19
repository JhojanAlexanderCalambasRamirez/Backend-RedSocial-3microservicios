const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); // Importar CORS
const authRoutes = require('../AuthMicroservice/routes/authRoutes');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

// Configurar CORS
const corsOptions = {
    origin: ['http://localhost', 'null'], // Permitir solicitudes desde localhost:3000 y 'null'
    methods: ['GET', 'POST'],
};
app.use(cors(corsOptions));

// Routes
app.use('/auth', authRoutes);

app.listen(3001, () => {
    console.log('User and Auth service listening on port 3001');
});
module.exports = app;
