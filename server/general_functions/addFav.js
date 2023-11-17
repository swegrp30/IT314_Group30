const mongoose = require("mongoose");

const user = require("../models/user");


const addFavourite = (async(req,res)=>{

    const company = req.body.company;
    const email = req.userData.email;

    try {

        const save = await user.updateOne({email:email},{$push :{favourites:company}});
        // console.log("Added-SuccesFully");
    } catch (error) {
        console.log("Error From addFav.js");
        console.log(error);
    }

    res.status(200).send();

})


module.exports = addFavourite;