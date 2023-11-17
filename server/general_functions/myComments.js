const mongoose = require("mongoose");

// const user = require("../models/user");
const cmnt = require("../models/comments");

const myComments = (async(req,res)=>{

    const user = req.userData.username;
    
    try {
        
        const cmnt = cmnt.find({username:username});
        res.status(200).send(cmnt);

    } catch (error) {
        console.log("This is error from myComments.js");
        console.log(error);
    }

})


module.exports = myComments;