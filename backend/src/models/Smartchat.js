const mongoose = require('mongoose');

const SmartchatSchema = new mongoose.Schema({
    form1: {
        fullname: {
            type: String,
            required: true,
        },
        status: {
            type: String,
        }
    },
    form2: {
        yes_no: {
            type: String,
            required: true,
        },
    },
    form3: {
        lastname: {
            type: String,
            required: true,
        },
        given: {
            type: String,
            required: true,
        },
        middlename: {
            type: String,
            required: false,
        },
        studentnumber: {
            type: String,
            required: true,
        },
        year_level: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        section: {
            type: String,
            required: true,
        },
    },
    form4: {
        concerns: {
            0: {

            },
            1: {

            },
            2: {
            
            },
            3: {

            }
        },
        otherConcerns: {
            type: String,
            required: false,
        },
        rate_level: {
            type: String,
            required: true,
        },
        emotions: {
            0: {

            },
            1: {

            },
            2: {
            
            },
        },
        otherEmotions: {
            type: String,
            required: false,
        },
    },
    form5: {
        email: {
            type: String,
            required: true,
        },
        mode: {
            type: String,
            required: true,
        },
        day: {
            type: String,
            required: true,
        },
        time: {
            0:{

            },
            1: {

            }
        }
    },
    form6: {
        consultation_relationship: {
            type: String,
            required: true,
        },
        contact_number: {
            type: Number,
            required: true,
        },
        email_person: {
            type: String,
            required: true,
        },
        professionals_allied: {
            type: String,
            required: true,
        },
    },
    timestamp: {
        type: Date,
        required: true,
    },

}, { collection: 'smartchat' });

const Smartchat = mongoose.model('Smartchat', SmartchatSchema);
module.exports = Smartchat;