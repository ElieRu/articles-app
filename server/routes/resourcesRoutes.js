

const express = require("express");
const router = express.Router();
const resourcesController = require("../controllers/resourcesController")
// const {addDate} = require("../middlewares/articleMiddlewares")

router.get('/resources', resourcesController.get);
// router.get('/:id', resourcesController.getId);
router.post('/resources', resourcesController.create);
router.put('/resources/:id', resourcesController.update);
router.delete('/resources/:id', resourcesController.delete);


module.exports = router;