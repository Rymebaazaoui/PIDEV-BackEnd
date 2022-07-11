var express = require('express');
var router = express.Router();
//var User = require('../model/Users.model');
const usersController = require("../controllers/users.controller");


router.get('/', usersController.showAlluser);
router.post('/createUser', usersController.createUser);
router.delete('/deleteUser/:id', usersController.deleteUserById);
router.put('/updateUser/:id',usersController.updateUser);
router.get('/searchUser/:id', usersController.searchUser);






module.exports = router;