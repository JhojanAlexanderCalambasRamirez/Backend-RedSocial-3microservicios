const messageModel = require('../models/messageModel'); // Importa el modelo de mensajes

// Controlador para crear un nuevo mensaje
exports.createMessage = async (req, res) => {
    try {
        // Extraer usuario_id y contenido del cuerpo de la solicitud
        const { usuario_id, contenido } = req.body;

        // Crear el mensaje en la base de datos usando el modelo
        await messageModel.createMessage(usuario_id, contenido);

        // Enviar respuesta al cliente
        res.status(201).json({ mensaje: 'Mensaje creado exitosamente' });
    } catch (error) {
        // Manejar errores
        console.error('Error al crear el mensaje:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para obtener todos los mensajes
exports.getAllMessages = async (req, res) => {
    try {
        // Obtener todos los mensajes de la base de datos usando el modelo
        const messages = await messageModel.getAllMessages();

        // Enviar respuesta con los mensajes al cliente
        res.status(200).json(messages);
    } catch (error) {
        // Manejar errores
        console.error('Error al obtener los mensajes:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
// Controlador para obtener mensajes por usuario_id
exports.getMessagesByUserId = async (req, res) => {
    const { usuario_id } = req.params;
    try {
        const messages = await messageModel.getMessagesByUserId(usuario_id);
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error al obtener mensajes del usuario en la base de datos:', error);
        res.status(500).json({ error: 'Error al obtener mensajes del usuario' });
    }
};
