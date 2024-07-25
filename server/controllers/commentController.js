
const Comment = require("../models/Comment")

module.exports = {
  create: async(req, res, next) => {
    console.log(req.body)
  }
}
