const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


// DB model
const otp = require("../models/otp");
const user = require("../models/user");



const otp_verification = (async (req, res) => {

    try {
        const email = req.body.email;
        const otp_number = req.body.otp;

        const data = await otp.findOne({ email : email });
        
        if(data == null){
            res.status(500).send("There may be some problem in system please try later");
        }

        const hashed_otp = data.otp;

        const match = await bcrypt.compare(otp_number, hashed_otp);
        if (match) {
            res.status(200).send("Verified");
        }
        else {
            res.status(288).send("Not-Valid");
        }
    }
    catch(e){
        console.log("There is error in otp_verification");
        console.log(e);
        res.status(400).send();
    }

})

module.exports = otp_verification;