const mongoose = require("mongoose");


const model = require("../models/user");
const user = require("../models/user");

const editProfile = (async(req,res)=>{

    const email = req.userData.email;
    const data = req.body
    const dob = req.body.dob;
    const name = req.body.name;
    const occupation = req.body.occupation;
    const pincode = req.body.pincode;
    const state = req.body.state;
    const city = req.body.city;
    const country = req.body.country;
    const gender = req.body.gender;
    
    

    try {        
        const update = await user.updateOne({email:email},{dob:dob,name:name,occupation:occupation,pincode:pincode,state:state,city:city,country:country,gender:gender});
        
        res.status(200).send();

    } catch (error) {
        console.log("This is error from editProfile.js");
        console.log(error);
        res.status(400).send();
    }
})


module.exports = editProfile;