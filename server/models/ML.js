const mongoose = require("mongoose");

const subschema = mongoose.Schema({
    Date: {
        type: Date
    },
    value: {
        type: Number
    }
})

const schema = mongoose.Schema({
    
    abc:{
        Type:[subschema]
    }
    
})




const RELIANCENS_3 = mongoose.model("RELIANCE.NS_3",schema);

module.exports = RELIANCENS_3;