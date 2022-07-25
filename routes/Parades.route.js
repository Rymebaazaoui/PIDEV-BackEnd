var express = require('express');
var router = express.Router();

//var Parade = require('../model/Parades');
const ParadeController = require("../controllers/parade.controller");


router.get('/', ParadeController.showAllparade);
router.get('/ParadeTypes', ParadeController.showAllparadeType);
router.get('/InscriptionParade', ParadeController.showAllInscription);
router.get('/searchParade/:id', ParadeController.searchParade);
router.post('/searchParadeParLieu', ParadeController.searchParadeByLieu);
//router.post('/createParade', ParadeController.createParade);
router.post('/api/createParadeType/:id', ParadeController.addParadeType);
router.post('/createInscriptionParade/:id', ParadeController.addInscriptionParade);
router.delete('/api/deleteParadeById/:id', ParadeController.deleteParadeById);
router.delete('/deleteInscriptionById/:id', ParadeController.deleteInscriptionById);
router.put('/api/updateParade/:id', ParadeController.updateParade);
//router.put('/updateParade/:id', ParadeController.updateParadeType);


module.exports = router;

