

const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController")

// router.get('', commentController.get);
// router.get('/:id', commentController.library_comments);
router.post('/', commentController.create);
// router.post('/unfollow', commentController.unfollow);
// router.delete('/:id', commentController.delete);


module.exports = router;