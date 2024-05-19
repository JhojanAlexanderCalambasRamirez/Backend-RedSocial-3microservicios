const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); // Agregar CORS
const relationshipRoutes = require('../relationshipMicroservice/routes/relationshipRoutes');

const app = express();
app.use(express.json());
app.use(morgan('dev'));




const corsOptions = {
    origin: ['http://localhost', 'null'], // Permitir solicitudes desde localhost:3000 y 'null'
    methods: ['GET', 'POST'],
  };
app.use(cors(corsOptions));

// Routes
app.use('/relationship', relationshipRoutes);
app.listen(3003, () => {
    console.log('User and Auth service listening on port 3003');
});
module.exports = app;
