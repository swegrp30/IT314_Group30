const mongoose = require("mongoose");

const cmnt = require("../models/comments");

const deleteComments = (async(req,res)=>{

    const comment_id = req.body.id;

    try {
        
        const dlt = cmnt.deleteOne({comment_id:comment_id});
        res.status(200).send();

    } catch (error) {
        console.log("This is error from deleteComments.js");
        console.log(error);
    }

})

module.exports = deleteComments;