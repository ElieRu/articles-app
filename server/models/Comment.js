const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        min: 10,
        max: 100,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { Timestamp: true });

const Comment = mongoose.model('Comment', CommentSchema);
module.exports  = Comment;