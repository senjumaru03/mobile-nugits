const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: false,
    },
    studentID: {
        type: String,
        required: true,
        unique: true,
    },
    department: {
        type: String,
        required: true,
    },
    Strands: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    }
}, { collection: 'verifiedUsers' }); 

RegistrationSchema.pre('save', function (next) {
    if (!this.status) {
      this.status = 'Active';
    }
    next();
});

const UserRegistration = mongoose.model('verifiedUsers', RegistrationSchema);

module.exports = UserRegistration;