const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const schema = mongoose.Schema({
    id:{
        type:String,
        unique:true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate(m) {
            if (validator.isMobilePhone(m)) {
                return true;
            }
            else {
                return false;
            }
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(e) {
            if (validator.isEmail(e)) {
                return true;
            }
            else {
                return false;
            }
        },
    },
    username: {
        type: String,
        unique:true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    favourites:{
        type: [String]
    },
    gender:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    country:{
        type:String
    },
    pincode:{
        type:Number
    },
    occupation:{
        type:String
    },
    dob:{
        type:Date
    },
    created_at:{
        type:Date,
        default:Date.now
    }
})

schema.pre("save",(async function(next){

    const password = this.password;

    const hashed_pass = await bcrypt.hash(password,5);

    this.password = hashed_pass;
    next();
}))



const user = mongoose.model("user",schema);

module.exports = user;
