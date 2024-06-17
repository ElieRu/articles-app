

const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController")
const {addDate} = require("../middlewares/articleMiddlewares")

router.get('', articleController.get);
router.get('/:id', articleController.getId);
router.post('', addDate, articleController.create);
router.put('/:id', articleController.update);
router.delete('/:id', articleController.delete);


module.exports = router;