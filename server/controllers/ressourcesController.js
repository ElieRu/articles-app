
const Ressource = require("../models/Ressource")

module.exports = {
    get: async (req, res, next) => {
        const {id} = req.query
        try {
            const ressources = await Ressource.find({}).where('libraryId', id)
            res.status(200).send(ressources)
        } catch (error) {
            res.status(200).send(error)
        }
    },
    create: async (req, res, next) => {
        const {userId, libraryId} = req.body
        const ressource = new Ressource(req.body)
        try {
            const save_essource = await ressource.save()
            res.status(200).send(await Ressource.find({})
            .where("libraryId", libraryId)
            .where("userId", userId)
        )
        } catch (error) {
            res.send(error)
        }
    },
    delete: async (req, res, next) => {
        const {id} = req.params
        try {
            const ressourceDeleted = await Ressource.deleteOne({ _id: id})
            // res.status(200).send(await Ressource.find({}))
        } catch (error) {
            
        }
    }
}