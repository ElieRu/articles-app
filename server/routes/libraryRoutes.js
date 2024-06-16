

const express = require("express");
const router = express.Router();
const libraryControler = require("../controllers/libraryControler")

// router.get('library', libraryControler.get)
// router.get('library/:id', libraryControler.getId)
router.post('library', libraryControler.create)
// router.put('library/:id', libraryControler.update)
// router.delete('library/:id', libraryControler.delete)


module.exports = router;