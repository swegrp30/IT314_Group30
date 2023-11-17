const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const user = require("../models/user");


const changePassword =(async (req,res)=>{

    const oldPass = req.body.oldPass;
    const newPass = req.body.newPass;
    const email = req.userData.email;

    try{

        const oldPassword = await user.findOneAndUpdate({email:email}).password;

        const verify = await bcrypt.compare(oldPass,oldPassword);
        if(verify){
            const update = await user.updateOne({email:email},{password:newPass});
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