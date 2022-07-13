var express = require('express');
var router = express.Router();
const VisiteController = require("../controllers/visite.controller");

router.put('/update/:id',VisiteController.updateVisite)
router.get('/', VisiteController.showAllvisite);
router.post('/create', VisiteController.create);
router.delete('/deleteVisite/:id', VisiteController.deleteVisiteById);
router.get('/searchVisite/:id', VisiteController.searchVisite);
router.post('/addLieu/:id', VisiteController.addVisiteLieu);


module.exports = router;