const mongoose = require('mongoose');

const UserShema = mongoose.Schema({
    usernameReg: String,
    passwordReg: String,
    emailReg: String,
    Create_Date: {
        type: Date,
        default: Date.now
    },
    userCard: Array
})

module.exports = mongoose.model('Users', UserShema);