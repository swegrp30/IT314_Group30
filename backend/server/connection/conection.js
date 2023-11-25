const mongoose = require("mongoose");
const express = require("express");

mongoose.set('strictQuery', false);

// mongodb://localhost:27017/
mongoose.connect("mongodb+srv://backend2:backend2@cluster0.qxwolth.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
    // useCreateIndex:true
}).then(()=>{
    // console.log(res);
    console.log("Connected To MONGO-DB");
}).catch((err)=>{
    console.log("ERROR FROM connect.js");
    console.log(err);
})


