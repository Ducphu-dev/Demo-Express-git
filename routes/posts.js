const express = require('express');
const Post = require('../models/Posts');

const router = express.Router();

// Get all
router.get('/', async (req, res)=>{
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({message: err})
    }
});

// Post request
router.post('/', async (req, res)=>{
    
    const post = new Post({
        product_img: req.body.product_img,
        product_img_hover: req.body.product_img_hover,
        product_img_slide: req.body.product_img_slide,
        product_date: req.body.product_date,
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
    try {
        const savedPost = await post.save();
        res.json(savedPost)
    } catch (error) {
        res.json({message: err})
    }
    
});

// Specific post
router.get('/:postId', async (req, res)=>{
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post)
    } catch (error) {
        res.json({message: err})
    }
   
})

// Delete
router.delete('/:postId', async (req, res)=>{
    try {
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost)
    } catch (error) {
        res.json({message: err})
    }
})

// Update
router.patch('/:postId', async(req, res)=>{
    try {
        const patchedPost = await Post.updateOne(
            {_id: req.params.postId}, 
            {$set: {
                product_img: req.body.product_img,
                product_img_hover: req.body.product_img_hover,
                product_img_slide: req.body.product_img_slide,
                product_date: req.body.product_date,
                product_sale: req.body.product_sale,
                product_name: req.body.product_name,
                product_price: req.body.product_price,
                product_description: req.body.product_description,
                prodcuct_weight: req.body.prodcuct_weight,
                product_dimension: req.body.product_dimension,
                product_material: req.body.product_material,
                product_infor: req.body.product_infor,
                product_amount: req.body.product_amount}});
        res.json(patchedPost)
    } catch (error) {
        res.json({message: err})
    }
})


module.exports = router;