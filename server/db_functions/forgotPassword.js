const mongoose = require("mongoose");

const user = require("../models/user");




const forgotPassword =(async(req,res)=>{

    const email = req.body.email;
    try {
        
        const x = await user.findOne({email:email});
        if(x !== undefined){
            
        }

    } catch (error) {
        
    }

})


module.exports = forgotPassword;