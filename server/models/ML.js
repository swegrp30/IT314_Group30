const mongoose = require("mongoose");
const validator = require("validator");


const subschema = mongoose.Schema({
    date: {
        type: Date,
        required: true

    },
    value: {
        type: Number,
        required: true
    }
})

const schema = mongoose.Schema({
    
    abc:{
        Type:[subschema]
    }
    
})




const RELIANCENS_3 = mongoose.model("reliance",schema);

module.exports = RELIANCENS_3;