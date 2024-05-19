const express = require('express');
const router = express.Router();
const relationshipController = require('../controllers/relationshipController');

// Ruta para seguir a un usuario
router.post('/follow', relationshipController.followUser);

// Ruta para obtener seguidores de un usuario
router.get('/followers/:usuario_id', relationshipController.getFollowers);

// Ruta para obtener seguidos de un usuario
router.get('/following/:usuario_id', relationshipController.getFollowing);

router.get('/following/:usuario_id/messages', relationshipController.getFollowingMessages);




module.exports = router;
