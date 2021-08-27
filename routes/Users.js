const express = require('express');

const Users = require('../models/Users');
const UserLogin = require('../models/GetLoginUser');

const router = express.Router();


// Get all
router.get('/', async (req, res)=>{
    try {
        const users = await Users.find();
        res.json(users);
    } catch (err) {
        res.json({message: err})
    }
});



router.post('/getuser', async (req, res)=>{

    const userExist = await Users.findOne({usernameReg: req.body.usernameLogin})

    if(!userExist) return res.status(400).send({name: req.body.usernameLogin, Msg: "User name or password doesn't exist!!"})
    if(req.body.passwordLogin !== userExist.passwordReg) return res.status(400).send({password: req.body.passwordLogin, Msg: "User name or password doesn't exist!!"}) 

    try {
        
        res.status(200).json({userName: userExist.usernameReg, userId: userExist._id, usercard: userExist.userCard} );
    } catch (err) {
        res.json({message: err})
    }
    
});

// Post request
router.post('/', async (req, res)=>{

    const userExist = await Users.findOne({usernameReg: req.body.usernameReg})
   
    const emailExist = await Users.findOne({emailReg: req.body.emailReg})
    if(userExist) return res.status(400).send({name: req.body.usernameReg, Msg: "User name already exist"})
    if(emailExist)  return res.status(400).send({email: req.body.emailReg, Msg: "Email already exist"})
    
    const users = new Users({
        usernameReg: req.body.usernameReg,
        passwordReg: req.body.passwordReg,
        emailReg: req.body.emailReg,
        Create_Date: req.body.Create_Date,
        userCard: req.body.userCard
    })
    try {
        const savedUser = await users.save();
        res.json(savedUser)
    } catch (err) {
        res.json({message: err})
    }
});

// Specific post
router.get('/:userId', async (req, res)=>{
    try {
        const users = await Users.findById(req.params.postId);
        res.json(users)
    } catch (err) {
        res.json({message: err})
    }
   
})

// Delete
router.delete('/:userId', async (req, res)=>{
    try {
        const removedUser = await Users.remove({_id: req.params.userId});
        res.json(removedUser)
    } catch (err) {
        res.json({message: err})
    }
})

// Update
router.patch('/:userId', async(req, res)=>{
    try {
        const patchedUser = await Users.updateOne(
            {_id: req.params.userId}, 
            {$set: {
                userCard: req.body.userCard
                }});
        res.json(patchedUser)
    } catch (err) {
        res.json({message: err})
    }
})


module.exports = router;