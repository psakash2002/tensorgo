const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    email: String,
    name: String,
    communicationHistory: [
        {
            type: String,
            subject: String,
            body: String,
            date: Date
        }
    ]
});

module.exports = mongoose.model('users', userSchema);
