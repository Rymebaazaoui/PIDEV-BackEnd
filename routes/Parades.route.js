var express = require('express');
var router = express.Router();

//var Parade = require('../model/Parades');
const ParadeController = require("../controllers/parade.controller");


router.get('/', ParadeController.showAllparade);
router.get('/ParadeTypes', ParadeController.showAllparadeType);
router.get('/api/searchParade/:id', ParadeController.searchParade);
//router.post('/createParade', ParadeController.createParade);
router.post('/api/createParadeType/:id', ParadeController.addParadeType);
router.delete('/api/deleteParadeById/:id', ParadeController.deleteParadeById);
router.put('/api/updateParade/:id', ParadeController.updateParade);
//router.put('/updateParade/:id', ParadeController.updateParadeType);


module.exports = router;

