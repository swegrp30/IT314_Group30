const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const cors = require("cors");


// models
const user = require("../models/user");
const comments = require("../models/comments");
const { v4: uuidv4 } = require('uuid');

const addcomments = async (req, res) => {
    const data = req.body;

    console.log(data);

    const cmnt_id = uuidv4();

    const new_comment = new comments({
        comment_id: cmnt_id,
        comment: data.comment,
        company: data.company,
        username: data.username,
        replies:data.replies
    })
    try {
        const save = await new_comment.save()
            .then(async () => {
                const x = await comments.find({ comment_id: cmnt_id });
                // console.log("SAVED");
                res.status(200).send();
            }).catch((e) => {
                console.log("THIS IS ERROR FROM addcomments.js file");
                console.log(e);
            })
    } catch (error) {
        console.log("THIS IS ERROR FROM addcomments.js -> save");
        console.log(error);
        res.status(400).send();
    }
}

module.exports = addcomments;