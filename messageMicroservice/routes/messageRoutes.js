const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/messages', messageController.getAllMessages);
router.post('/messages', messageController.createMessage);
router.get('/messages/:usuario_id', messageController.getMessagesByUserId);

module.exports = router;
