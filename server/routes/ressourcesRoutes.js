

const express = require("express");
const router = express.Router();
const ressourcesController = require("../controllers/ressourcesController")
// const {addDate} = require("../middlewares/articleMiddlewares")

router.get('/ressources', ressourcesController.get);
// router.get('/:id', ressourcesController.getId);
router.post('/ressources', ressourcesController.create);
// router.put('/:id', ressourcesController.update);
// router.delete('/:id', ressourcesController.delete);


module.exports = router;