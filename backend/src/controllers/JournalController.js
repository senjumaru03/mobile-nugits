const Journal = require('../models/Journal');

exports.getJournals = async (req, res) => {
    try {
        const journals = await Journal.find();
        res.json(journals);
    } catch (error) {
        console.error('Get journals error', error);
        res.status(500).json({ message: 'Error getting journals.' });
    }
}

exports.getJournal = async (req, res) => {
    try {
        const journal = await Journal.findById(req.params.id);
        if(!journal) {
            return res.status(404).json({ message: 'Journal not found.' });
        }
        res.json(journal);
    } catch (error) {
        console.error('Get journal error', error);
        res.status(500).json({ message: 'Error getting journal.' });
    }
}

exports.saveJournal = async (req, res) => {
    try {
        const journal = new Journal(req.body);
        await journal.save();
        res.status(201).json({ message: 'Journal saved successfully.' });
    } catch (error) {
        console.error('Save journal error', error);
        res.status(500).json({ message: 'Error saving journal.' });
    }
}

exports.updateJournal = async (req, res) => {
    try {
        await Journal.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Journal updated successfully.' });
    } catch (error) {
        console.error('Update journal error', error);
        res.status(500).json({ message: 'Error updating journal.' });
    }
}

exports.deleteJournal = async (req, res) => {
    try{
        await Journal.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Journal deleted successfully.' });
    } catch (error) {
        console.error('Delete journal error', error);
        res.status(500).json({ message: 'Error deleting journal.' });
    }
}