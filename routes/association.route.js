var express = require('express');
var router = express.Router();
const AssociationController = require("../controllers/association.controller");

router.get('/', AssociationController.showAllass);
router.post('/create', AssociationController.create);
router.delete('/deleteAssociation/:id', AssociationController.deleteAssociationById);
router.get('/searchAssociation/:id', AssociationController.searchAssociation);
router.post('/createAssociationType/:id', AssociationController.addAssociationType);


module.exports = router;
