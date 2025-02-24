const Smartchat = require('../models/Smartchat');

exports.getSmartchats = async (req, res) => {
    try {
        const smartchats = await Smartchat.find();
        res.json(smartchats);
    } catch (error) {
        console.error('Get smartchats error', error);
        res.status(500).json({ message: 'Error getting smartchats.' });
    }
}

exports.getSmartchat = async (req, res) => {
    try {
        const smartchat = await Smartchat.findById(req.params.id);
        
        if(!smartchat) {
            return res.status(404).json({ message: 'Smartchat not found.' });
        }

        res.json(smartchat);
    } catch (error) {
        console.error('Get smartchat error', error);
        res.status(500).json({ message: 'Error getting smartchat.' });
    }
}

