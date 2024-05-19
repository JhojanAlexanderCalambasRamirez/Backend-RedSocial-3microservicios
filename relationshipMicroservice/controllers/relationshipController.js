const relationshipModel = require('../models/relationshipModel');



exports.followUser = async (req, res) => {
  const { usuarioP_id, usuarioS_id } = req.body;
  try {
    await relationshipModel.followUser(usuarioP_id, usuarioS_id);
    res.status(201).json({ mensaje: 'Ahora sigues a este usuario' });
  } catch (error) {
    console.error('Error de base de datos:', error);
    res.status(500).json({ error: 'Error de servidor' });
  }
};

exports.getFollowers = async (req, res) => {
  const { usuario_id } = req.params;
  try {
    const followers = await relationshipModel.getFollowersByUserId(usuario_id);
    res.status(200).json(followers);
  } catch (error) {
    console.error('Error de base de datos:', error);
    res.status(500).json({ error: 'Error de servidor' });
  }
};

exports.getFollowing = async (req, res) => {
  const { usuario_id } = req.params;
  try {
    const following = await relationshipModel.getFollowingByUserId(usuario_id);
    res.status(200).json(following);
  } catch (error) {
    console.error('Error de base de datos:', error);
    res.status(500).json({ error: 'Error de servidor' });
  }
};

exports.getFollowingMessages = async (req, res) => {
  const { usuario_id } = req.params;
  try {
    const following = await relationshipModel.getFollowingByUserId(usuario_id);
    const messages = [];

    for (const follow of following) {
      const userMessages = await messageModel.getMessagesByUserId(follow.usuarioS_id);
      messages.push(...userMessages);
    }

    res.status(200).json(messages);
  } catch (error) {
    console.error('Error al obtener los mensajes de los usuarios seguidos:', error);
    res.status(500).json({ error: 'Error de servidor' });
  }
};

