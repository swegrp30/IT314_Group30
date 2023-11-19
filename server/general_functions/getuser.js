const { mongo, default: mongoose } = require("mongoose");

const user = require("../models/user");
const { response } = require("express");

const getuser = (async (req, res) => {
    const data = req.body;
    // console.log(data);
    const obj = await user.find({ username: data.username });
    if (obj == null) {
        res.status(404).send();
    }
    else{
    res.status(200).send(obj);
    }
})

module.exports = getuser;