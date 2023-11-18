const mongoose = require("mongoose");
const otpGenerator = require('otp-generator')


const user = require("../models/user");
const otp = require("../models/otp");

const x = require("../mailer/mailer");
const mail = x.forgotPassword;


const forgotPassword =(async(req,res)=>{

    const email = req.body.email;

    try {
        
        const x = await user.findOne({email:email});

        if(x !== undefined){
            const match = await otp.findOne({email:email});
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
            const otp_number = otpGenerator.generate(6, { lowerCaseAlphabets:false, upperCaseAlphabets: false, specialChars: false });
            const mailer = mail(x.username,x.email,otp_number);
            const data = new otp({
                email : x.email,
                otp : otp_number
            })
            try {
                const saved = await data.save();
                res.status(200).send()
            } catch (error) {
                console.log("This is error from signup.js -> mailer part");
                console.log(error);
                res.status(400).send();
            }
            // OTP VERIFICATION
        }

        else{
            res.status(404).send();
        }

    } catch (error) {
        console.log("This is error from forgotPassword.js");
        console.log(error);
        res.send(400).send();
    }

})


module.exports = forgotPassword;