

const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController")
const { addDate } = require("../middlewares/articleMiddleware")

router.get('/articles', articleController.get)
router.get('/articles/:id', articleController.getId)
router.post('/articles', addDate, articleController.create)
router.put('/articles/:id', articleController.update)
router.delete('/articles/:id', articleController.delete)


module.exports = router;