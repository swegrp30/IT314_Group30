const mongoose = require("mongoose");

// const user = require("../models/user");
const comment = require("../models/comments");

const myComments = (async(req,res)=>{

    const user = req.userData.username;
    
    try {
        
        const cmnt = await comment.find({username:user}).exec();
        // console.log(cmnt);
        
        res.status(200).send(cmnt);

    } catch (error) {
        console.log("This is error from myComments.js");
        console.log(error);
        res.status(400).send();
    }

})


module.exports = myComments;