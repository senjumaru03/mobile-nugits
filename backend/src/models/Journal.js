const mongoose = require('mongoose');

const JournalSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    mood: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: true,
    },
    mood_image: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        ref: 'verifiedUsers',
    },
    lastname: {
        type: String,
        required: true,
        ref: 'verifiedUsers',
    }
}, { collection: 'journal' });

const Journal = mongoose.model('Journal', JournalSchema);

module.exports = Journal;