
const Comment = require("../models/Comment")

module.exports = {
  get: async(req, res, next) => {
    const query = req.query;
    // console.log(query);
    try {
      // const comments = Comment.find({
      //   libraryId: query.libraryId
      // });
      // console.log(comments);
      // res.status(200).send(comments);
    } catch (error) {
      
    }
  },
  create: async(req, res, next) => {
    const data = req.body;
    console.log(data);
    try {
      const form_data = new Comment(data);
      const data_saved = await form_data.save();
      res.status(200).send(
        await Comment.find({
          resourceId: data.resourceId
        })
      )
    } catch (error) {
      res.status(200).send(error)
    }
  }
}
