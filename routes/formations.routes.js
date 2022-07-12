var express = require('express');
var router = express.Router();
const FormationController = require("../controllers/formations.controller");

router.get('/', FormationController.showAllformations);
router.post('/api/create', FormationController.create);
router.post('/api/addType/:id', FormationController.addFormationType);
router.delete('/api/deleteFormation/:id', FormationController.deleteFormationById);
router.put('/api/updateFormation/:id', FormationController.updateFormation);
router.get('/api/searchFormation/:id', FormationController.searchFormation);
//  router.put('/updateFormationtype/:id', FormationController.updateFormationtype);

module.exports = router;