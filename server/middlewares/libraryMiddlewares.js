
const Library = require("../models/Library")

function get_hash_uri() {
    const length = 50
    const hash_str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // Character set
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * hash_str.length);
      result += hash_str[randomIndex];
    }
    return result;
  }

async function hash_uri (req, res, next) {
    const formLibrary = {
        ...req.body,
        uri: get_hash_uri()
    }
    req.body = formLibrary;
    next();
}

module.exports = {
    hash_uri
};

