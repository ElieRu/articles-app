
const mongoose = require("mongoose")

const testSchema = new mongoose.Schema({
    _id: false,
    id: mongoose.Schema.Types.ObjectId,
    title: String
});

testSchema.method.findSimiler = function (cb) {
    return mongoose.model('Follower').find({name: this.type}, cb)
}

const Test = new mongoose.Model('Test', testSchema);
module.exports = Test;