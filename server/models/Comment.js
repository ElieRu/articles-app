const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        min: 4,
        max: 100,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    libraryId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
    userPicture: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    resourceId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
}, { timestamps: true });

const Comment = mongoose.model('Comment', CommentSchema);
module.exports  = Comment;