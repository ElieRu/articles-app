

const express = require("express");
const router = express.Router();
const libraryControler = require("../controllers/libraryControler")
const {addAttrs} = require("../middlewares/libraryMiddlewares")

router.get('/libraries', libraryControler.get)
// router.get('/:id', libraryControler.getId)
router.post('/libraries', libraryControler.create)
// router.put('/:id', libraryControler.update)
// router.delete('/:id', libraryControler.delete)


module.exports = router;