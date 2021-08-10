const express = require('express');
const Users = require('../models/Users');

const router = express.Router();

// Get all
router.get('/', async (req, res)=>{
    try {
        const users = await Users.find();
        res.json(users);
    } catch (error) {
        res.json({message: err})
    }
});

// Post request
router.post('/', async (req, res)=>{
    
    const users = new Users({
        usernameReg: req.body.usernameReg,
        passwordReg: req.body.passwordReg,
        emailReg: req.body.emailReg,
        Create_Date: req.body.Create_Date,
        
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
        const users = await Users.findById(req.params.postId);
        res.json(users)
    } catch (error) {
        res.json({message: err})
    }
   
})

// Delete
router.delete('/:userId', async (req, res)=>{
    try {
        const removedUser = await Users.remove({_id: req.params.userId});
        res.json(removedUser)
    } catch (error) {
        res.json({message: err})
    }
})

// Update
router.patch('/:userId', async(req, res)=>{
    try {
        const patchedUser = await Users.updateOne(
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