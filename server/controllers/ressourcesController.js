
const Ressource = require("../models/Ressource")

module.exports = {
    create: async (req, res, next) => {
        const {userId, libraryId} = req.body
        const ressource = new Ressource(req.body)
        try {
            const save_essource = await ressource.save()
            res.status(200).send(await Ressource.find({}))
            .where("userId", userId)
            .where("libraryId", libraryId)
        } catch (error) {
            res.send(error)
        }
    }
}