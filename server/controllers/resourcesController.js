
const Resource = require("../models/Resource")
const mongoose = require('mongoose');

module.exports = {
    get: async (req, res, next) => {
        const {id} = req.query
        try {
            const resources = await Resource.find({}).where('libraryId', id)
            res.status(200).send(resources)
        } catch (error) {
            res.status(200).send(error)
        }
    },
    create: async (req, res, next) => {
        const {userId, libraryId} = req.body
        const resource = new Resource(req.body)
        try {
            const save_esource = await resource.save()
            res.status(200).send(await Resource.find({})
            .where("libraryId", libraryId)
            .where("userId", userId)
        )
        } catch (error) {
            res.send(error)
        }
    },
    update: async(req, res, next) => {
        const form_resource = req.body
        const resourceId = req.params.id
        const libraryId = form_resource.libraryId
        const ress = new Resource(req.body)        
        try {
            const resource = await Resource.findOneAndUpdate({
                _id: resourceId
            }, form_resource, {
                new: true,
                runValidators: true
            })          
            const data = await Resource.findById(resourceId)  
            console.log(data)
            res.status(200).send(await Resource.findById(resourceId))
            // .where("libraryId", libraryId)
        } catch (error) {
            res.status(200).send(error)
        }
    },
    delete: async (req, res, next) => {
        const {id} = req.params
        const {libraryId} = req.query
        try {
            const resourceDeleted = await Resource.deleteOne({ _id: id})
            res.status(200).send(await Resource.find({}).where('libraryId', libraryId))
        } catch (error) {
            
        }
    },
    resources_proposed: async (req, res, next) => {
        const { resourceId } = req.query

        // try {
            // const newId = new ObjectId('66a8faf95c91ba64adb57efa');
        // } catch (error) {
            
        // }

        const agg = [
            {
                '$lookup': {
                    'from': 'libraries', 
                    'localField': 'libraryId', 
                    'foreignField': '_id', 
                    'as': 'library'
                }
            }, {
                '$project': {
                    'author': 0, 
                    'language': 0, 
                    'resume': 0, 
                    'libraryId': 0, 
                    '__v': 0, 
                    'userId': 0
                }
            }, {
            '$match': {
                'library': {
                    '$exists': true, 
                    '$ne': []
                }
            }
            }, {
            '$match': {
                '_id': {
                    '$ne': mongoose.Types.ObjectId('66a8faf95c91ba64adb57efa')
                }
            }
        }
    ];
  
    const result = await Resource.aggregate(agg);
    // console.log(newId)
    console.log(result);

    // await client.close();
    }
}
