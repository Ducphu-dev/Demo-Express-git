const express = require('express');
const Post = require('../models/Posts.js');

const router = express.Router();

router.get('/',(req, res)=>{
    res.send('On Posts')
})

router.post

module.exports = router;