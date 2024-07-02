const mongoose = require("mongoose")

// Schema allow us to call functions
// or middlewares *before and *after requests...
const ressourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50
    },
    author: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50
    },
    published: {},
    volume: {
        type: Number,
        required: false,
    },
    gender: {
        type: String,
        required: true,
        enum: ["Fiction", "Non-Fiction", "Romance", "Mystery"]
    },
    editor: {
        type: String,
        required: false,
        // minLength: 4,
        // maxLength: 50
    },
    language: {
        type: String,
        required: false,
        enum: ["English", "French", "other"]
    },
    resume: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 200
    },
    book_cover: {
        type: String,
        required: false,
    },
    url: {
        type: String,
        required: false,
        // minLength: 4,
        // maxLength: 200
    },
    userId: {
        type: String,
        required: true
    },
    libraryId: {
        type: String,
        required: true
    }
})

const Ressource = mongoose.model('Ressource', ressourceSchema);

module.exports = Ressource;
