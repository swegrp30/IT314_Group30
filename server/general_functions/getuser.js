const { mongo, default: mongoose } = require("mongoose");
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








    const data = req.userData;
    console.log(data);
    const obj = await user.find({ email: data.email });
    console.log(obj)
    if (obj == null) {
        res.status(404).send();
    }
    else{
    res.status(200).send(obj);
    }
})

module.exports = getuser;