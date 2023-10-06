const { mongo, default: mongoose } = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const user = require("../models/user");


const login = (async (req, res) => {
    const data = req.body;
    console.log(data);
    const type = data.type;
    const username = data.username;
    const password = data.password;
    const obj = await user.findOne({ username: username });
    if (obj == null) {
        res.status(404).send();
    }
    const real_password = obj.password;
    const password_match = await bcrypt.compare(password, real_password);

    // const pipe = [{
    //     $project: {
    //         _id: 0,
    //         password: 0
    //     }
    // }]

    // const aggrigated_obj = await user.aggregate(pipe);

    if (password_match == true) {
        res.status(200).send(obj);
    }
    else {
        res.status(211).send();
    }
})

module.exports = login;