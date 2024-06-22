const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.sessionSecret]
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', require('./routes/auth'));
app.use('/api/email', require('./routes/email'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
