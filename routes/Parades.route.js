var express = require('express');
var router = express.Router();
//var Parade = require('../model/Parades');
const ParadeController = require("../controllers/parade.controller");


router.get('/', ParadeController.showAllparade);
router.get('/searchParade/:id', ParadeController.searchParade);
router.post('/createParade', ParadeController.createParade);
router.delete('/deleteParadeById/:id', ParadeController.deleteParadeById);
router.put('/updateParade/:id', ParadeController.updateParade);




/* GET users listing. */

/*router.get('/', function(req, res, next) {
    Parade.find((err, data)=>{
        res.json(data);
        
    });
   
});*/



module.exports = router;

