const User = require("../models/registration")

exports.register = async (req, res) => {
    try {
        const { email, firstName, lastName, middleName, studentID, department, Strands, password, } = req.body;

        const user = new User({ email, firstName, lastName, middleName, studentID, department, Strands, password, });

        // const isExist = await User.find({
        //     email: email,
        //     studentID: studentID,
        // })

        // if (isExist){
        //     res.status(403)
        //     throw Error('User already exists.')
        // }

        await user.save();
        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error('Registration error', error);
        res.status(500).json({ message: 'Error registering user.' });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Get users error', error);
        res.status(500).json({ message: 'Error getting users.' });
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        console.error('Get user error', error);
        res.status(500).json({ message: 'Error getting user.' });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'User deleted successfully.'});
    } catch (error) {
        console.error('Delete user error', error);
        res.status(500).json({ message: 'Error deleting user.' });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { email, studentID, ...updateData } = req.body;
        await User.findByIdAndUpdate(req.params.id, updateData);
        res.status(200).json({message: 'User updated successfully.'});
    } catch (error) {
        console.error('Update user error', error);
        res.status(500).json({ message: 'Error updating user.' });
    }
}