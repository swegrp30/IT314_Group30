const mongoose = require("mongoose");


const model = require("../models/user");
const comments = require("../models/comments");

const editComment = (async(req,res)=>{

    const comment_id = req.body.comment_id;
    const comment = req.body.new_comment
    const username = req.userData.username;
    const data = await comments.findOne({username:username})
    if(data != null){
    try {        
        const update = await comments.updateOne({comment_id:comment_id},{comment:comment});
        
        res.status(200).send();

    } catch (error) {
        console.log("This is error from editComment.js");
        console.log(error);
        res.status(400).send();
    }
}
else{
    console.log("You can't change this comment");
    res.status(202).send();
}
})


module.exports = editComment;