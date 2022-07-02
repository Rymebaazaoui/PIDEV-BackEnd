var express = require('express');
var router = express.Router();
//var Parade = require('../model/Parades');
const ParadeController = require("../controllers/parade.controller");


router.get('/', ParadeController.showAllparade);
router.post('/create', ParadeController.create);
router.get('/deleteParade/:id', ParadeController.deleteParadeById);




/* GET users listing. */

/*router.get('/', function(req, res, next) {
    Parade.find((err, data)=>{
        res.json(data);
        
    });
   
});*/



module.exports = router;

