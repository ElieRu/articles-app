const mongoose = require("mongoose")

// Schema allow us to call functions
// or middlewares *before and *after requests...
const librarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    type: {
        type: String,
        required: true,
        enum: {
            values: ["Public Library", "Academic Library",  "School Library", "Special Collection Library"],
            message: "{VALUE} is not supported"
        }
    },
    logo: {
        type: Date,
        required: false
    },
    description: {
        type: String,
        required: false,
        min: 4,
        max: 100
    },
    userId: {
        type: String,
        required: true,
    }
})

const Library = mongoose.model('Library', librarySchema);

module.exports = Library;
