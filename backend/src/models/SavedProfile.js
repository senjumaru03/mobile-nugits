const mongoose = require('mongoose');

const Profile = new mongoose.Schema({
    form1: {
        lastName: {
            type: String,
            required: true,
        },
        nationality: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        civilStatus: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
            required: false,
        },
        gender: {
            type: String,
            required: true,
        },
        religion: {
            type: String,
            required: false,
        },
        suffix: {
            type: String,
            required: false,
        },
        mobile: {
            type: Number,
            required: true,
        },
        birthdate: {
            type: Date,
            required: true,
        },
        telephone: {
            type: Number,
            required: false,
        },
        countryBirth: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        birthplace: {
            type: String,
            required: true,
        },
    },
    form2: {
        presentProvince: {
            type: String,
            required: true,
        },
        permanentCountry: {
            type: String,
            required: true,
        },
        presentCity: {
            type: String,
            required: true,
        },
        permanentProvince: {
            type: String,
            required: true,
        },
        presentHouse: {
            type: String,
            required: true,
        },
        permanentCity: {
            type: String,
            required: true,
        },
        presentBrgy: {
            type: String,
            required: true,
        },
        permanentHouse: {
            type: String,
            required: true,
        },
        presentPostal: {
            type: Number,
            required: true,
        },
        permanentBrgy: {
            type: String,
            required: true,
        },
        permanentPostal: {
            type: Number,
            required: true,
        },
    },
    form3: {
        contactFirstName: {
            type: String,
            required: true,
        },
        contactLastName: {
            type: String,
            required: true,
        },
        relationship: {
            type: String,
            required: true,
        },
        emergencyContact: {
            type: Number,
            required: true,       
        }
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    datetime: {
        type: Date,
        default: Date.now,
    }
}, {collection: 'savedProfile'});

const SavedProfile = mongoose.model('savedProfile', Profile);

module.exports = SavedProfile;