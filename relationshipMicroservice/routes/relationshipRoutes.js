const express = require('express');
const router = express.Router();
const relationshipController = require('../controllers/relationshipController');

// Ruta para seguir a un usuario
router.post('/follow', relationshipController.followUser);

// Ruta para obtener los seguidores de un usuario
router.get('/followers/:usuario_id', relationshipController.getFollowers);

// Ruta para obtener los usuarios que un usuario sigue
router.get('/following/:usuario_id', relationshipController.getFollowing);

// Ruta para obtener los mensajes de los usuarios que un usuario sigue
router.get('/following/:usuario_id/messages', relationshipController.getFollowingMessages);

module.exports = router;
