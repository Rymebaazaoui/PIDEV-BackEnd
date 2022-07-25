var express = require('express');
var router = express.Router();
const AssociationController = require("../controllers/association.controller");

router.get('/', AssociationController.showAllass);
router.post('/create', AssociationController.create);
router.delete('/deleteAssociation/:id', AssociationController.deleteAssociationById);
router.get('/searchAssociation/:id', AssociationController.searchAssociation);
router.post('/createAssociationType/:id', AssociationController.addAssociationType);
router.put('/updateAssociation/:id', AssociationController.updateAssociation);


//type
router.get('/type/association', AssociationController.showType);
router.post('/type/add', AssociationController.createType);

//inscri
router.get('/InscriptionAssociation', AssociationController.showIns);
router.post('/createInscriptionAssociation/:id', AssociationController.addInscriptionAssociation);
router.delete('/deleteInscriptionAssociationById/:id', AssociationController.deleteInscriptionById);






module.exports = router;
