

const express = require("express");
const router = express.Router();
const followerController = require("../controllers/followerController")
const {addDate} = require("../middlewares/articleMiddlewares")

// router.get('', followerController.get);
router.get('/:id', followerController.library_followers);
router.post('/', followerController.add);
router.post('/unfollow', followerController.unfollow);
// router.delete('/:id', followerController.delete);


module.exports = router;