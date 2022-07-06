var express = require('express');
var router = express.Router();
//var Parade = require('../model/Parades');
const VisiteController = require("../controllers/visite.controller");


router.get('/', VisiteController.showAllvisite);
router.post('/create', VisiteController.create);
router.get('/deletevisite/:id', VisiteController.deletevisiteById);
router.get('/updatevisite/:id', VisiteController.updatevisiteById);





/* GET users listing. */

/*router.get('/', function(req, res, next) {
    Parade.find((err, data)=>{
        res.json(data);

    });

});*/



module.exports = router;