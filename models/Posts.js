const mongoose = require('mongoose');

const PostShema = mongoose.Schema({
    product_img: String,
    product_img_hover: String,
    product_img_slide: [
        String,
        String,
        String,
        String
    ],
    product_date: {
        type: Date,
        default: Date.now
    },
    product_sale: Number,
    product_name: String,
    product_price: Number,
    product_description: String,
    prodcuct_weight: String,
    product_dimension: String,
    product_material: String,
    product_infor: String,
    product_amount: Number
})

module.exports = mongoose.model('Posts', PostShema);