const userModel = require('../models/userModel');

exports.login = async (req, res) => {
  const { usuario, password } = req.body;
  try {
      const user = await userModel.getUserByCredentials(usuario, password);
      if (!user) {
          return res.status(401).json({ error: 'Credenciales inválidas' });
      }
      res.status(200).json(user);
  } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};


exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error de base de datos:', error);
    res.status(500).json({ error: 'Error de servidor' });
  }
};

exports.createUser = async (req, res) => {
  const { nombre_completo, usuario, password, rol } = req.body;
  try {
    await userModel.createUser(nombre_completo, usuario, password, rol);
    res.status(201).json({ mensaje: 'Usuario creado exitosamente' });
  } catch (error) {
    console.error('Error de base de datos:', error);
    res.status(500).json({ error: 'Error de servidor' });
  }
};

exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.getUserById(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
