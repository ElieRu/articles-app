
const Library = require("../models/Library")

module.exports = {
    get: async (req, res, next) => {
        const get_user_libraries = req.query
        try {
            let libraries = await Library.find(
                get_user_libraries ? get_user_libraries : {}).limit(15);
            res.status(200).send(libraries);
        } catch (err) {
            console.log(err);
        }
    },
    getId: async (req, res, next) => {
        const id = req.params.id
        try {
            const library = await Library.findById( { _id: id} );
            if (library) res.send( library );
            if (!library) res.send({ getData: false });
        } catch (error) {
            res.send({ getData: false }); 
        }
    },
    getRole: async (req, res, next) => {
        // const {userId} = req.params.userId
        console.log("userId")
    },
    create: async (req, res, next) => {
        const library = new Library(req.body)
        // console.log(req.body);
        try {
            const tmpSaved = await library.save()
            
            const library_reated = await Library.find({
                userId: req.body.userId
            })
            const library_id = library_reated.slice(-1)[0]._id
            res.status(200).send(await Library.findById({ _id: library_id }))
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

