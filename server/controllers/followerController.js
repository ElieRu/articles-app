
const Follower = require("../models/Follower")
const Library = require("../models/Library")

module.exports = {
    add: async (req, res, next) => {
        const follower = new Follower(req.body)
        try {
            const save_follower = await follower.save()
            res.status(200).send(true)
        } catch (error) { }
    },
    library_followers: async(req, res, next) => {
        const libraryId = req.params.id
        const followers = await Follower.find({
            libraryId: libraryId
        })
        res.status(200).send(followers)
    }
}
