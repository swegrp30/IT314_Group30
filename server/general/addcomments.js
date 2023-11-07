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

    const new_comment = new comments({
        comment_id: uuidv4(),
        comment: data.comment,
        company: data.company,
        username: data.username,
        replies:data.replies
    })
    try {
        const save = await new_comment.save()
            .then(async () => {
                const x = await comments.find({ comment: data.comment });
                console.log("SAVED");
                res.status(200).send(x);
            }).catch((e) => {
                console.log("THIS IS ERROR FROM addcomments.js file");
                console.log(e);
                const err = e.keyPattern;
                // console.log(err);
                // if (err.hasOwnProperty('email') == true && err.email == 1) {
                //     res.status(410).send();
                // }
                // else if (err.hasOwnProperty('phone') == true && err.phone == 1) {
                //     res.status(411).send();
                // }
                // else if (err.hasOwnProperty('username') == true && err.username == 1) {
                //     res.status(412).send();
                // }
                // else {
                //     res.status(413).send("Bad Request");
                // }
            })
    } catch (error) {
        console.log("THIS IS ERROR FROM addcomments.js -> save");
        console.log(error);
    }
}

module.exports = addcomments;