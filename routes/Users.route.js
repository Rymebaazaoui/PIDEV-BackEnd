var express = require('express');
var router = express.Router();
//var User = require('../model/Users.model');
const usersController = require("../controllers/users.controller");


router.get('/', usersController.showAlluser);
router.post('/createUser', usersController.createUser);
router.delete('/deleteUser/:id', usersController.deleteUserById);





/* GET users listing. */

/*router.get('/', function(req, res, next) {
    Parade.find((err, data)=>{
        res.json(data);
        
    });
   
});*/



module.exports = router;