
const Article = require("../models/Article")

module.exports = {
    get: async (req, res, next) => {
        try {
            const { page } = req.query || 0;
            const { limit} = req.query;

            let startIndex = (page - 1) * limit;
            let lastIndex = (page) * limit;

            // let articles = await Article.find({}).skip(skip).limit(limit);
            let articles = await Article.find({});

            const result = articles.slice(startIndex, lastIndex);
            
            res.status(200).send(articles);

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
            res.status(200).send( await Article.find({}) )
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
    pagination: async (req, res, next) => { res.status(201).send("pagination") },
}

