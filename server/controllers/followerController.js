
const Follower = require("../models/Follower")
const Library = require("../models/Library")

module.exports = {
    add: async (req, res, next) => {
        const follower = new Follower(req.body)
        try {
            const save_follower = await follower.save()
            res.status(200).send(true)
        } catch (error) { }
    }
}
