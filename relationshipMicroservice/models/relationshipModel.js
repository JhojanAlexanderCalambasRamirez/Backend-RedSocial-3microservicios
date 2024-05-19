const pool = require('../config').pool;

exports.followUser = async (usuarioP_id, usuarioS_id) => {
  try {
    await pool.query('INSERT INTO relaciones (usuarioP_id, usuarioS_id) VALUES (?, ?)', [usuarioP_id, usuarioS_id]);
  } catch (error) {
    throw new Error('Error al seguir al usuario en la base de datos: ' + error.message);
  }
};

exports.getFollowersByUserId = async (usuario_id) => {
  try {
    const [rows] = await pool.query('SELECT usuarioP_id FROM relaciones WHERE usuarioS_id = ?', [usuario_id]);
    return rows;
  } catch (error) {
    throw new Error('Error al obtener seguidores del usuario en la base de datos: ' + error.message);
  }
};

exports.getFollowingByUserId = async (usuario_id) => {
  try {
    const [rows] = await pool.query('SELECT usuarioS_id FROM relaciones WHERE usuarioP_id = ?', [usuario_id]);
    return rows;
  } catch (error) {
    throw new Error('Error al obtener seguidos del usuario en la base de datos: ' + error.message);
  }
};
