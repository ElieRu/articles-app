
const Library = require("../models/Library")

async function addAttrs (req, res, next) {
    // console.log(req.body)
    const formLibrary = {
        ...req.body,
        src_logo: "put-it",
        description: "Your description"
    }
    req.body = formLibrary;
    console.log(req.body);
    next();
}

module.exports = {
    addAttrs
};
