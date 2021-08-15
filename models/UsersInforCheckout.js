const mongoose = require('mongoose');

const UserInforShema = mongoose.Schema({
   
    account_firstName: String,
    account_lastName: String,
    account_companyName: String,
    account_country: String,
    account_address: String,
    account_apartment: String,
    account_city: String,
    account_state: String,
    account_phone: Number,
    account_email: String,
    account_product: Array,
    account_product_total: Number
})

module.exports = mongoose.model('UsersInforCheckout', UserInforShema);