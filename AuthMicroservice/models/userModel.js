const pool = require('../config').pool;

exports.getUserByCredentials = async (usuario, password) => {
  const [rows] = await pool.query('SELECT * FROM usuarios WHERE usuario = ? AND password = ?', [usuario, password]);
  return rows[0];
};
exports.getAllUsers = async () => {
  const [rows] = await pool.query('SELECT id, nombre_completo, usuario, password, rol FROM usuarios');
  return rows;
};
exports.createUser = async (nombre_completo, usuario, password, rol) => {
    await pool.query('INSERT INTO usuarios (nombre_completo, usuario, password, rol) VALUES (?, ?, ?, ?)', [nombre_completo, usuario, password, rol]);
};

exports.getUserById = async (userId) => {
  const [rows] = await pool.query('SELECT id, nombre_completo, usuario, password, rol FROM usuarios WHERE id = ?', [userId]);
  return rows[0];
};
