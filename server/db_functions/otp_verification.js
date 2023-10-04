const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


// DB model
const otp = require("../models/verification/otp");
const user = require("./user");



const otp_verification = (async (req, res) => {

    try {
        const email = req.body.email;
        const otp_number = req.body.otp;

        const data = await otp.findOne({ email : email });
        const hashed_otp = data.otp;

        const match = await bcrypt.compare(otp_number, hashed_otp);
        if (match) {
            res.status(200).send("Verified");
        }
        else {

            try {
                const dlt = await user.deleteOne({ email: email });
                
            } catch (error) {
                console.log("This is error from otp_verification.js -> delete part");
                console.log(error);
            }
            res.status(288).send("Not-Valid");
        }
    }
    catch(e){
        console.log("There is error in otp_verification");
        console.log(e);
    }

})

module.exports = otp_verification;