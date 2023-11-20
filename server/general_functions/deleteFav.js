const mongoose = require("mongoose");

const user = require("../models/user");


const deleteFav = (async(req,res)=>{

    const company = req.body.company;
    const email = req.userData.email;

    try {

        const save = await user.updateOne({email:email},{$pull :{favourites:company}});
        console.log("Deleted-SuccesFully");
    } catch (error) {
        console.log("Error From deleteFav.js");
        console.log(error);
        res.status(400).send();
    }

    res.status(200).send();

})


module.exports = deleteFav;