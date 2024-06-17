
const Article = require("../models/Article")

async function addDate (req, res, next) {
    
    let getCurrentDateTime = {
        ...req.body, 
        date: Date.now()
    }

    req.body = getCurrentDateTime;
    next()
}

module.exports = {
    addDate
};

