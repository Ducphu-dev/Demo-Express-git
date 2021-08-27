const express = require('express');

const Admin = require('../models/Admin');

const router = express.Router();


// Get all
router.get('/', async (req, res)=>{
    try {
        const admin = await Admin.find();
        res.json(admin);
    } catch (err) {
        res.json({message: err})
    }
});



router.post('/getadmin', async (req, res)=>{
    const adminExist = await Admin.findOne({adminName: req.body.adminName})

    if(!adminExist) return res.status(400).send({name: req.body.adminPassword, Msg: "User name or password doesn't exist!!"})

    // const passwordExist = await Users.findOne({passwordReg: req.body.passwordLogin})
    // console.log(passwordExist)
    if(req.body.adminPassword !== adminExist.adminPassword) return res.status(400).send({password: req.body.adminPassword, Msg: "User name or password doesn't exist!!"}) 

    try {
        
        res.status(200).json({adminName: adminExist.adminName, adminId: adminExist._id, adminArray: adminExist.adminArray} );
    } catch (err) {
        res.json({message: err})
    }
    
});

// Post request
router.post('/', async (req, res)=>{

    const userExist = await Admin.findOne({adminName: req.body.adminName})
   
    if(userExist) return res.status(400).send({name: req.body.adminName, Msg: "User name already exist"})
    console.log(userExist)
    
    const users = new Admin({
        adminName: req.body.adminName,
        adminPassword: req.body.adminPassword,
        Create_Date: req.body.Create_Date,
        adminArray: req.body.adminArray
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
        const admin = await Admin.findById(req.params.postId);
        res.json(admin)
    } catch (err) {
        res.json({message: err})
    }
   
})

// Delete
router.delete('/:userId', async (req, res)=>{
    try {
        const removedUser = await Admin.remove({_id: req.params.userId});
        res.json(removedUser)
    } catch (err) {
        res.json({message: err})
    }
})

// Update
router.patch('/:userId', async(req, res)=>{
    try {
        const patchedUser = await Admin.updateOne(
            {_id: req.params.userId}, 
            // {$set:

            // },
            {$set: {
                userCard: req.body.userCard
                }});
        res.json(patchedUser)
    } catch (err) {
        res.json({message: err})
    }
})


module.exports = router;