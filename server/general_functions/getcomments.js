const { mongo, default: mongoose } = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const user = require("../models/user");
const { response } = require("express");
const comments = require("../models/comments");

const getcomments = (async (req, res) => {
    const data = req.body;
    // console.log(data);
    const obj = await comments.find({ company: data.company });
    if (obj == null) {
        res.status(404).send();
    }
    else{
    res.status(200).send(obj);
    }
})

module.exports = getcomments;