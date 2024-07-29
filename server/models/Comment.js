const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        min: 10,
        max: 100,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Comment = mongoose.model('Comment', CommentSchema);
module.exports  = Comment;