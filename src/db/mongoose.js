const mongoose = require('mongoose');
const CONFIG = require('../config/config');

mongoose.set('strictQuery', false);

mongoose.connect(CONFIG.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});