const mongoose = require('mongoose');

const ClearanceSchema = new mongoose.Schema({
    form: {
        first_name:{
            type: String,
            required: true,
        },
        middle_initial: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        suffix: {
            type: String,
            required: false,
        },
        student_number: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        contact_number: {
            type: Number,
            required: true,
        },
        reason: {
            type: String,
            required: true,
        },
    },
    timestamp: {
        type: Date,
        default: Date.now(),
    },

}, {collation: 'clearance'});

const clearance = mongoose.model('clearance', ClearanceSchema);
module.exports = clearance;