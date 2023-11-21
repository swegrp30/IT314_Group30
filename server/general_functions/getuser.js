const { mongo, default: mongoose } = require("mongoose");
<<<<<<< HEAD
const { response } = require("express");

const user = require("../models/user");

const getuser = (async (req, res) => {

    try {
        const data = req.userData;
        const obj = await user.findOne({ email: data.email });
        
        if(obj){
            res.status(200).send(obj);
        }
        else{
            res.status(404).send();
        }

    } catch (error) {
        
        

    }








=======
const user = require("../models/user");
const { response } = require("express");

const getuser = async (req, res) => {
>>>>>>> 79a9520933df352ca8f46f2151da17a9a0a358ed
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
};

module.exports = getuser;