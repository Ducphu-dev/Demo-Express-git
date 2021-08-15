const mongoose = require('mongoose');

const UserLoginShema = mongoose.Schema({
    usernameLogin: String,
    passwordLogin: String,
})

module.exports = mongoose.model('UserLogin', UserLoginShema);