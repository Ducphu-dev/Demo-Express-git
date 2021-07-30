const express = require('express');
const mongoose = require('mongoose');
require("dotenv/config");
const app = express();

// Import Routes
const postRoute = require('./routes/posts');

app.use("/posts", postRoute)


// connect db
mongoose.connect(
    process.env.DB__CONNECTION,
    {useNewUrlParser:true,
    useUnifiedTopology: true },
    ()=>
    console.log("connect to DB")
)

// ROUTES
app.get("/",(req, res )=>{
    res.send("We are on home")
});

app.get("/post",(req, res )=>{
    res.send("We are on post")
});

// How to w start listening to the server
app.listen(3000)