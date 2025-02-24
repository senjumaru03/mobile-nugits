const express = require('express');
const router = express.Router();
const journalController = require('../controllers/JournalController');

router.get('/all', journalController.getJournals);
router.get('/:id', journalController.getJournal);
router.post('/save', journalController.saveJournal);
router.put('/:id', journalController.updateJournal);
router.delete('/:id', journalController.deleteJournal);

module.exports = router;