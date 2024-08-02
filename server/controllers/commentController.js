
const Comment = require("../models/Comment")

module.exports = {
  get: async(req, res, next) => {
    const { resourceId } = req.query;
    try {
      const resources = await Comment.find({
        resourceId: resourceId
      }).limit(5)
      res.status(200).send(resources)
    } catch (error) {
      console.log('error')
    }
  },
  create: async(req, res, next) => {
    const myComment = new Comment(req.body);
    const {resourceId} = req.body
    
    try {
      const saved = await myComment.save();
      res.status(200).send(
        await Comment.find({
          'resourceId': resourceId
        })
      )
    } catch (error) {
      res.status(201).send(error)
    }
  }
}
