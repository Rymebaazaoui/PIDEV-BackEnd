var express = require('express');
var router = express.Router();
//var User = require('../model/Users.model');
const usersController = require("../controllers/users.controller");


router.get('/', usersController.showAlluser);
router.post('/api/createUser', usersController.createUser);
router.delete('/api/deleteUser/:id', usersController.deleteUserById);
router.put('/api/updateUser/:id',usersController.updateUser);
router.get('/api/searchUser/:id', usersController.searchUser);






module.exports = router;