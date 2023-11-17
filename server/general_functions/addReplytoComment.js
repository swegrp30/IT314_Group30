const mongoose = require("mongoose");


const cmnt = require("../models/comments");

const rply = (async(req,res)=>{

    const user = req.userData.username;
    const comment = req.body.comment;
    const commentID = req.body.commentID;

    try {
        const reply = {
            username : user,
            reply : comment
        }
        
        const data = await cmnt.updateOne({comment_id:commentID},{$push:{replies:reply}});
        res.status(200).send();

    } catch (error) {
        console.log("This is error from addReplytoComments.js");
        console.log(error);
        res.status(400).send();
    }

})

module.exports = rply;