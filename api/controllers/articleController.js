
const Article = require("../models/Article")

module.exports = {
    get: async (req, res, next) => {
        try {
            const all = await Article.find({})
            res.send(all);
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
        const articleSaved = new Article(req.body)
        try {
            const tmpSaved = await articleSaved.save()
            res.status(201).send(tmpSaved)
        } catch (e) {
            res.status(400).send({ dataCreated: false })
        }
    },
    update: async (req, res, next) => {
        const id = req.params.id;
        try {
            const update_article = await Article.findByIdAndUpdate({ _id: id }, req.body)
            res.status(201).send({ dataUpdated: true })
        } catch (err) {
            res.status(400).send({ dataUpdated: false })
        }
    },
    delete: async (req, res, next) => {
        const id = req.params.id;

        try {
            const articles = await Article.deleteOne({ _id: id })
            if (articles) res.status(201).send({ dataDeleted: true });
            if (!articles) res.status(400).send({ dataDeleted: false });
        } catch (err) {
            res.status(400).send({ dataDeleted: false });
        }        
    },
    search: async (req, res, next) => { res.status(201).send("search") },
    pagination: async (req, res, next) => { res.status(201).send("pagination") },
    sort: async (req, res, next) => { res.status(201).send("sort") },
}

