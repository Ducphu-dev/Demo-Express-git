const express = require('express');

const UsersInforCheckout = require('../models/UsersInforCheckout');

const router = express.Router();


// Get all
router.get('/', async (req, res)=>{
    try {
        const users = await UsersInforCheckout.find();
        res.json(users);
    } catch (error) {
        res.json({message: err})
    }
});


// Post request
router.post('/', async (req, res)=>{
    console.log(req.body.account_firstName)

    const users = new UsersInforCheckout({
        account_firstName: req.body.account_firstName,
        account_lastName: req.body.account_lastName,
        account_companyName: req.body.account_companyName,
        account_country: req.body.account_country,
        account_address: req.body.account_address,
        account_apartment: req.body.account_apartment,
        account_city: req.body.account_city,
        account_state: req.body.account_state,
        account_phone: req.body.account_phone,
        account_email: req.body.account_email,
        account_product: req.body.account_product,
        account_product_total: req.body.account_product_total
            
    })
    try {
        const savedUser = await users.save();
        res.json(savedUser)
    } catch (error) {
        res.json({message: err})
    }
});

// Specific post
router.get('/:userId', async (req, res)=>{
    try {
        const users = await UsersInforCheckout.findById(req.params.postId);
        res.json(users)
    } catch (error) {
        res.json({message: err})
    }
   
})

// Delete
router.delete('/:userId', async (req, res)=>{
    try {
        const removedUser = await UsersInforCheckout.remove({_id: req.params.userId});
        res.json(removedUser)
    } catch (error) {
        res.json({message: err})
    }
})

// Update
router.patch('/:userId', async(req, res)=>{
    try {
        const patchedUser = await UsersInforCheckout.updateOne(
            {_id: req.params.userId}, 
            {$set: {
                usernameReg: req.body.usernameReg,
                passwordReg: req.body.passwordReg,
                emailReg: req.body.emailReg,
                Create_Date: req.body.Create_Date,
                }});
        res.json(patchedUser)
    } catch (error) {
        res.json({message: err})
    }
})


module.exports = router;