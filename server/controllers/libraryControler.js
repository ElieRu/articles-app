
const Library = require("../models/Library")

module.exports = {
    get: async (req, res, next) => {
        try {
            let libraries = await Library.find({});
            res.status(200).send(libraries);
        } catch (err) {
            console.log(err);
        }
    },
    getId: async (req, res, next) => {
        const id = req.params.id
        
        try {
            const article = await Article.findById( { _id: id} );
            if (article) res.send( article );
            if (!article) res.send({ getData: false });
        } catch (error) {
            res.send({ getData: false });
        }
    },
    create: async (req, res, next) => {
        const librarySaved = new Library(req.body)
        try {
            const tmpSaved = await librarySaved.save()
            res.status(200).send( await Library.find({}) )
        } catch (e) {
            res.status(400).send(true)
        }
    },
    update: async (req, res, next) => {
        const id = req.params.id;
        try {
            const update_article = await Article.findByIdAndUpdate({ _id: id }, req.body)
            res.status(201).send(await Article.find({}))
        } catch (err) {
            res.status(400).send({ dataUpdated: false })
        }
    },
    delete: async (req, res, next) => {
        const id = req.params.id;

        try {
            const articles = await Article.deleteOne({ _id: id })
            if (articles) res.status(201).send( await Article.find({}) );
            if (!articles) res.status(400).send({ dataDeleted: false });
        } catch (err) {
            res.status(400).send({ dataDeleted: false });
        }        
    },
    // pagination: async (req, res, next) => { res.status(201).send("pagination") },
}

