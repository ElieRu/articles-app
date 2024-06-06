const mongoose = require("mongoose")

// Schema allow us to call functions
// or middlewares *before and *after requests...
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    type: {
        type: String,
        required: true,
        enum: {
            values: ['Persuasive', 'Expository', 'Narrative', 'Descriptive'],
            message: "{VALUE} is not supported"
        }
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true,
        min: 4,
        max: 50
    },
    // user_id: {}
})

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
