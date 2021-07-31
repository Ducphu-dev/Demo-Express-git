const express = require('express');
const mongoose = require('mongoose');
// var bodyParser = require('body-parser');
require("dotenv/config");
const app = express();

// Middleware
// app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.json());

// Import Routes
const postRoute = require('./routes/Posts');


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

// How to w start listening to the server
app.listen(3002)