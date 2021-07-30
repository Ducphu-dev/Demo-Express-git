const mongoose = require('mongoose');

const PostShema = mongoose.Schema({
    product_id: Number,
    product_img: URL,
    product_img_hover: URL,
    product_img_slide: [
        URL,
        URL,
        URL,
        URL
    ],
    product_date: {
        type: Number,
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