const express = require('express');
const Post = require('../models/Posts');

const router = express.Router();

router.get('/',(req, res)=>{
    res.send('On Posts')
});

router.post('/',(req, res)=>{
    
    const post = new Post({
        product_id: req.body.product_id,
        product_img: req.body.product_img,
        product_img_hover: req.body.product_img_hover,
        product_img_slide: req.body.product_img_slide
            
        ,
        // product_date: {
        //     type: Number,
        //     default: Date.now
        // },
        product_sale: req.body.product_sale,
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_description: req.body.product_description,
        prodcuct_weight: req.body.prodcuct_weight,
        product_dimension: req.body.product_dimension,
        product_material: req.body.product_material,
        product_infor: req.body.product_infor,
        product_amount: req.body.product_amount
    })

    post.save()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json({message: err})
    })
});
// router.post()

module.exports = router;