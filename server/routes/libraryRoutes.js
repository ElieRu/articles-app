

const express = require("express");
const router = express.Router();
const libraryControler = require("../controllers/libraryControler")
const {hash_uri} = require("../middlewares/libraryMiddlewares")

router.get('/libraries', libraryControler.get)
router.get('/libraries/:id', libraryControler.getId)
router.get('/libraries/role', libraryControler.getRole)
router.post('/libraries', libraryControler.create)
// router.put('/:id', libraryControler.update)
// router.delete('/:id', libraryControler.delete)


module.exports = router;