const express = require('express');
const router = express.Router();
const profileController = require('../controllers/ProfileController');

router.get('/all', profileController.getProfiles);
router.get('/:email', profileController.getProfile);
router.post('/save', profileController.saveProfile);
router.delete('/:id', profileController.deleteProfile);
router.put('/:id', profileController.updateProfile);

module.exports = router;