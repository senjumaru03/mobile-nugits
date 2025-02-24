const express = require('express');
const router = express.Router();
const smartchatController = require('../controllers/SmartchatController');

router.get('/all', smartchatController.getSmartchats);
router.get('/:id', smartchatController.getSmartchat);

module.exports = router;