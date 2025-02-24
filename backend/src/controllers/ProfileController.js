const Profile = require('../models/SavedProfile');

exports.getProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.json(profiles);
    } catch (error) {
        console.error('Get profiles error', error);
        res.status(500).json({ message: 'Error getting profiles.' });
    }
}

exports.saveProfile = async (req, res) => {
    try {
        // const profile = new Profile(req.body);

        const {email, form1, form2, form3} = req.body;

        const profile = new Profile({
            email,
            form1,
            form2,
            form3,
        });

        await profile.save();
        res.status(201).json({ message: 'Profile saved successfully.' });
    } catch (error) {
        console.error('Save profile error', error);
        res.status(500).json({ message: 'Error saving profile.' });
    }
}

exports.getProfile = async (req, res) => {
    try {
        // const profile = await Profile.findById(req.params.id);

        const email = req.params.email;

        const profile = await Profile.findOne({ 'form1.email': email });
        
        if(!profile) {
            return res.status(404).json({ message: 'Profile not found.' });
        }


        res.json(profile);
    } catch (error) {
        console.error('Get profile error', error);
        res.status(500).json({ message: 'Error getting profile.' });
    }
}

exports.deleteProfile = async (req, res) => {
    try {
        await Profile.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Profile deleted successfully.' });
    } catch (error) {    
        console.error('Delete profile error', error);
        res.status(500).json({ message: 'Error deleting profile.' });
    }
}

exports.updateProfile = async (req, res) => {
    try {
        const { form1: { email, ...updateData } } = req.body;
        const profile = await Profile.findByIdAndUpdate(req.params.id, updateData);
        res.json(profile);
    } catch (error) {
        console.error('Update profile error', error);
        res.status(500).json({ message: 'Error updating profile.' });
    }
}