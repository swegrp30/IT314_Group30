const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');


// models


const mail_=(async (req,res)=>{
    console.log("III");
    const Schema2 = mongoose.Schema;   
    console.log(Schema2);
    res.send(200);
})


module.exports = mail_;