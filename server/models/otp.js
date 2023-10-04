const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const schema = new mongoose.Schema({
    otp:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires : 180
    }
})


schema.pre("save",(async function(next){

    const otp = this.otp;

    const hashed_pass = await bcrypt.hash(otp,8);

    this.otp = hashed_pass;
    next();
}))

const otp = mongoose.model("otp",schema);

module.exports = otp;