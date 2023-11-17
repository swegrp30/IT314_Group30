const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const user = require("../models/user");


const changePassword =(async (req,res)=>{

    const oldPass = req.body.oldPass;
    const newPass = req.body.newPass;
    const email = req.userData.email;

    try{

        const x = await user.findOne({email:email});
        console.log(x)
        const oldPassword = x.password
        const verify = await bcrypt.compare(oldPass,oldPassword);
        if(verify==true){

            const hashed_pass = await bcrypt.hash(newPass,5);

            const update = await user.updateOne({email:email},{$set:{password:hashed_pass}});
            res.status(200).send();
        }
        else{
            res.status(202).send();
        }

    }catch(error){
        console.log("This is error from changePassword.js");
        console.log(error);
    }

})


module.exports = changePassword;