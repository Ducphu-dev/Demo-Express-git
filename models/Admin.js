const mongoose = require('mongoose');

const AdminShema = mongoose.Schema({
    adminName: String,
    adminPassword: String,
    Create_Date: {
        type: Date,
        default: Date.now
    },
    adminArray: Array
})

module.exports = mongoose.model('Admin', AdminShema);