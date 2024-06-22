const express = require('express');
const mongoose = require('mongoose');
const Postmark = require('postmark');
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');

const router = express.Router();
const User = mongoose.model('users');
const client = new Postmark.ServerClient(keys.postmarkApiToken);

router.get('/history', requireLogin, async (req, res) => {
    const user = await User.findById(req.user.id);
    res.send(user.communicationHistory);
});

router.post('/send', requireLogin, async (req, res) => {
    const { to, subject, body } = req.body;

    client.sendEmail({
        "From": req.user.email,
        "To": to,
        "Subject": subject,
        "TextBody": body
    });

    const user = await User.findById(req.user.id);
    user.communicationHistory.push({ type: 'sent', subject, body, date: new Date() });
    await user.save();

    res.send({ success: true });
});

module.exports = router;
