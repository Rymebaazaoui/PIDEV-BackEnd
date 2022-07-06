var express = require('express');
var router = express.Router();

<<<<<<< HEAD
var type_Formation = require('../model/type_formation.model');
=======
var Type_parade = require('../model/Type_parade');
>>>>>>> f59c7643b6e6e98c990319c9d74a293df0a71897


/* GET users listing. */
router.post('/', async(req, res) => {
<<<<<<< HEAD
  const type_formation = new type_Formation({...req.body});
  await type_formation.save();
        res.json(type_formation);
=======
  const type_parade = new Type_parade({...req.body});
  await type_parade.save();
        res.json(type_parade);
>>>>>>> f59c7643b6e6e98c990319c9d74a293df0a71897
  //res.send('respond with a resource');
});

router.get('/', async(req, res) => {
  //res.send('respond with a resource');
<<<<<<< HEAD
  const type_formations = await type_Formation.find();
  res.json(type_formations);
=======
  const type_parades = await Type_parade.find();
  res.json(type_parades);
>>>>>>> f59c7643b6e6e98c990319c9d74a293df0a71897
});

module.exports = router;
