const express = require('express');
const mongoose = require('mongoose');
var Cors = require('cors');
require("dotenv/config");
const axios = require('axios')
const app = express();



// Middleware
app.use(Cors())
app.use(express.json());

// Import Routes
const postRoute = require('./routes/posts');
const userRoute = require('./routes/Users');
const userInforRoute = require('./routes/UserInfor');
const adminRoute = require('./routes/Admin');

app.use("/posts", postRoute)
app.use("/users", userRoute)
app.use("/userinfor", userInforRoute)
app.use("/admin", adminRoute)


// connect db
mongoose.connect(
    process.env.DB__CONNECTION,
    {useNewUrlParser:true,
    useUnifiedTopology: true },
    ()=>
    console.log("connect to DB")
)

// ROUTES

app.get("/send/users",(req, res )=>{
    res.send("We are on home")
});
app.get("/",(req, res )=>{
    res.send("We are on home")
});



// How to w start listening to the server
app.listen(3001)