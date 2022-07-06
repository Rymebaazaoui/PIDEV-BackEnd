var express = require('express');
var router = express.Router();

//var Parade = require('../model/Parades');
const ParadeController = require("../controllers/parade.controller");


router.get('/', ParadeController.showAllparade);
router.get('/searchParade/:id', ParadeController.searchParade);
//router.post('/createParade', ParadeController.createParade);
router.post('/createParadeType/:id', ParadeController.addParadeType);
router.delete('/deleteParadeById/:id', ParadeController.deleteParadeById);
router.put('/updateParade/:id', ParadeController.updateParade);
//router.put('/updateParade/:id', ParadeController.updateParadeType);


module.exports = router;

