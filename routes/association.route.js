var express = require('express');
var router = express.Router();
const AssociationController = require("../controllers/association.controller");

router.get('/', AssociationController.showAllass);
router.post('/create', AssociationController.create);
router.delete('/deleteAssociation/:id', AssociationController.deleteAssociationById);
router.get('/searchFormation/:id', AssociationController.searchAssociation);

module.exports = router;
