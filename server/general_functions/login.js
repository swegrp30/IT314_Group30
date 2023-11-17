const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');




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

                
                const aggrigated_obj = object[0];
                
                
                // Mailing 
                email(aggrigated_obj.name,aggrigated_obj.username,aggrigated_obj.email);
                
                // Generating Cookies
                const token = jwt.sign(
                    {
                        email: aggrigated_obj.email,
                        username:aggrigated_obj.username
                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    }
                );
                    
                // Adding token to response Object
                aggrigated_obj.token = token;
                // console.log(aggrigated_obj);

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