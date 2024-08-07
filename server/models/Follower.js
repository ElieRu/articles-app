const mongoose = require("mongoose")

const FollowerSchema = new mongoose.Schema({
    libraryId: {
        type: mongoose.Schema.ObjectId,
        require: true
    },
    user_picture: {
        type: String,
        require: true
    },
    user_name: {
        type: String,
        require: true
    },
    user_email: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    }
})

const Follower = mongoose.model('Follower', FollowerSchema)

module.exports = Follower