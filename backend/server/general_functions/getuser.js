const { mongo, default: mongoose } = require("mongoose");
const { response } = require("express");

const user = require("../models/user");

const getuser = (async (req, res) => {

    const data = req.userData;
    console.log(data);  

    try {
        const obj = await user.findOne({ username: data.username });

        if (obj) {
            res.status(200).send(obj);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        console.log("This is error from GetUser.js")
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = getuser;