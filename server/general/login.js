const { mongo, default: mongoose } = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const user = require("../models/user");
const { response } = require("express");
const jwt=require('jsonwebtoken');

const login = (async (req, res) => {
    const data = req.body;
    console.log(data);
    const type = data.type;
    const username = data.username;
    const password = data.password;
    const obj = await user.findOne({ username: username });
    if (obj == null) {
        res.status(404).send();
    }
    const real_password = obj.password;
    const password_match = await bcrypt.compare(password, real_password);
    const secretKey = username+"bearandbull"
    if (password_match == true) {
        res.status(200).send(obj);
        jwt.sign({obj},secretKey,{expiresIn: '300s'},(err,token) =>{
            response.json({
                token
            })
        })
    }
    else {
        res.status(211).send();
    }
})

module.exports = login;