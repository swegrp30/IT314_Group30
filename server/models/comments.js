const mongoose = require("mongoose");




const subschema = mongoose.Schema({
    username: {
        type: String
    },
    reply: {
        type: String
    }
})

const schema = mongoose.Schema({
    comment_id: {
        type: String,
        unique: true,
        required: true
    },
    comment: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    replies: {
        type: [subschema],
        default: []
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})


const comments = mongoose.model("comments", schema);

module.exports = comments;
