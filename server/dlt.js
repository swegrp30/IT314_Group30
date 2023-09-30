const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');


// models
const mail = require("./mailer/mailer");

const mail_=(async (req,res)=>{
    console.log(req.body.name);
    console.log("III");
    const x = await mail("Natvar_123","shubhampatel12233@gmail.com");
    res.send(200);
})


module.exports = mail_;