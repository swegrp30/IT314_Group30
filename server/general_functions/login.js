const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const user = require("../models/user");
const { default: isEmail } = require("validator/lib/isEmail");

const all = require("../mailer/mailer")
const email = all.login;

const login = (async (req, res) => {
    const phone = req.body.phone;
    const password = req.body.password;

    try {

        const saved_data = await user.findOne({ phone: phone });
        if (saved_data == null) {
            res.status(404).send();
        }
        else {
            const real_password = saved_data.password;
            const verify = await bcrypt.compare(password, real_password);

            if (verify == true) {

                const pipe = [
                    {
                        $match: {
                            phone: phone
                        }   
                    },
                    {
                        $project: {
                            _id: 0,
                            password: 0
                        }
                    }
                ]

                const object = await user.aggregate(pipe);

                // Send An Email
                const aggrigated_obj = object[0];
                
                console.log(aggrigated_obj);
                email(aggrigated_obj.name,aggrigated_obj.username,aggrigated_obj.email);

                res.status(200).send(aggrigated_obj);
            }
            else {
                res.status(211).send();
            }

        }

    } 
    catch (error) {
        console.log("error from ./general_function/login.js");
        console.log(error);
        res.status(400).send("Bad Request");
    }

})


module.exports = login;