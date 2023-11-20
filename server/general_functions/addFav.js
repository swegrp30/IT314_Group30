const mongoose = require("mongoose");

const user = require("../models/user");


const addFavourite = (async(req,res)=>{

    const company = req.body.company;
    const email = req.userData.email;

    try {
        // Check if the company already exists in the user's favorites
        const userObj = await user.findOne({ email: email });

        if (userObj && userObj.favourites.includes(company)) {
            return res.status(200).json({ message: "Company already in favorites" });
        }

        const save = await user.updateOne({ email: email }, { $push: { favourites: company } });
        // console.log("Added-SuccesFully");
     } catch (error) {
        console.log("Error From addFav.js");
        console.log(error);
        res.status(400).send();
    }

    res.status(200).send();

})


module.exports = addFavourite;