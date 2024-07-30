const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        min: 4,
        max: 100,
        required: true
    },
    userPicture: {
        type: String
    },
    userName: {
        type: String
    },
    userId: {
        type: String,
        required: true
    },
    libraryId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    resourceId: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
}, { timestamps: true });

const Comment = mongoose.model('Comment', CommentSchema);
module.exports  = Comment;