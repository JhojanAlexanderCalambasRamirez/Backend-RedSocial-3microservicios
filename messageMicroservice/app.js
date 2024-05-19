const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); // Agregar CORS
const messageRoutes = require('../messageMicroservice/routes/messageRoutes');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const corsOptions = {
  origin: ['http://localhost', 'null'], // Permitir solicitudes desde localhost:3000 y 'null'
  methods: ['GET', 'POST'],
};
// Routes
app.use(cors(corsOptions));
app.use('/message', messageRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Message service listening on port ${PORT}`);
});

module.exports = app;
