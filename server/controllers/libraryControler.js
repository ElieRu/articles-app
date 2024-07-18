
const Library = require("../models/Library")
const Follower = require("../models/Follower")

module.exports = {
    get: async (req, res, next) => {
        const {all_libraries, userId} = req.query

        const getting = all_libraries ? { $ne: userId } : { $eq: userId }

        const agg = [
            {
              '$lookup': {
                'from': 'followers', 
                'localField': '_id', 
                'foreignField': 'libraryId', 
                'as': 'followers'
              }
            },
            {
                '$match': {
                    'userId': getting
                }
            }
          ];

        try {
            let libraries = await Library.aggregate(agg);

            for (let i=0; i<libraries.length; i++) {
                let followers = libraries[i].followers;
                for (let j=0; j<followers.length; j++) {
                    if (followers[j].userId == userId) {
                        libraries[i].following = true
                    }
                }
            }
            // console.log(libraries)
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
        const {userId, libraryId} = req.query
        let getUserId = ""

        const library = await Library.find({})
            .where("_id", libraryId)
            .where("userId", userId)
        
        if (library.length === 1) res.status(200).send(true)
        if (library.length === 0) res.status(200).send(false)
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
        const {id} = req.params;
        const {userId} = req.query;

        try {
            const libraries = await Library.deleteOne({ _id: id })
            res.status(200).send( await Library.find({
                userId: userId
            }) 
        );
            // if (!libraries) res.status(400).send({ dataDeleted: false });
        } catch (err) {
            res.status(400).send({ dataDeleted: false });
        }        
    },
    // pagination: async (req, res, next) => { res.status(201).send("pagination") },
}

