
const Follower = require("../models/Follower")
const Library = require("../models/Library")
const {get} = require("../controllers/libraryControler")

module.exports = {
  add: async(req, res, next) => {
      const agg = [
          {
            '$lookup': {
              'from': 'followers', 
              'localField': '_id', 
              'foreignField': 'libraryId', 
              'as': 'followers'
            }
          }
        ];

      const follower = new Follower(req.body);

      try {
          const save_follower = await follower.save();
          await get(req, res, next);
          // res.status(200).send(await Library.aggregate(agg));
      } catch (error) {}
  },
  library_followers: async(req, res, next) => {
      const libraryId = req.params.id;
      const followers = await Follower.find({
          libraryId: libraryId
      });
      res.status(200).send(followers);
  },
  unfollow: async(req, res, next) => {
    const params = req.body.params
    try {
      const followers = await Follower.findByIdAndDelete(params)
      res.status(200).send(await Follower.find({
        libraryId: req.body.params.libraryId
      }))
    } catch (error) { }
    console.log("The follower is unfollow...")
  }
}
