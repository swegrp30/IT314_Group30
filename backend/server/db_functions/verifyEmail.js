const { mongo, default: mongoose } = require("mongoose");
const otpGenerator = require('otp-generator')

const user = require("../models/user");
const otp = require("../models/otp");

const x = require("../mailer/mailer");
const mail = x.signup;



const verifyEmail = (async (req, res) => {

    const email = req.body.email;

    const match = await user.findOne({ email: email });

    if (match) {
        res.status(222).send("Email Already Exist");
    }
    else {
        const match = await otp.findOne({ email: email });
        if (match) {
            try {
                await otp.deleteOne({ email: email });
                console.log("Document deleted successfully");
            } catch (error) {
                console.log("Error deleting document:", error);
                res.status(500).send("Internal Server Error");
                return;
            }
        }

        const otp_number = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
        console.log(otp_number);
        const mailer = mail(email, otp_number);
        const data = new otp({
            email: email,
            otp: otp_number
        })
        try {
            const saved = await data.save();
            res.status(200).send()
        } catch (error) {
            console.log("This is error from verifyEmail.js -> mailer part");
            console.log(error);
            res.status(400).send();
        }

    }


})

module.exports = verifyEmail;