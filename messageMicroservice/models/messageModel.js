const pool = require('../config').pool;

exports.createMessage = async (usuario_id, contenido) => {
    try {
        await pool.query('INSERT INTO mensajes (usuario_id, contenido) VALUES (?, ?)', [usuario_id, contenido]);
    } catch (error) {
        console.error('Error al crear el mensaje:', error);
        throw new Error('Error al crear el mensaje en la base de datos');
    }
};

exports.getAllMessages = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM mensajes');
        return rows;
    } catch (error) {
        console.error('Error al obtener todos los mensajes:', error);
        throw new Error('Error al obtener mensajes de la base de datos');
    }
};

exports.getMessagesByUserId = async (usuario_id) => {
    try {
        const [rows] = await pool.query('SELECT * FROM mensajes WHERE usuario_id = ?', [usuario_id]);
        return rows;
    } catch (error) {
        console.error('Error al obtener mensajes del usuario en la base de datos:', error);
        throw new Error('Error al obtener mensajes del usuario en la base de datos: ' + error.message);
    }
};
