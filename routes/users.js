var express = require('express');
var router = express.Router();

var type_Formation = require('../model/type_formation.model');


/* GET users listing. */
router.post('/', async(req, res) => {
  const type_formation = new type_Formation({...req.body});
  await type_formation.save();
        res.json(type_formation);
  //res.send('respond with a resource');
});

router.get('/', async(req, res) => {
  //res.send('respond with a resource');
  const type_formations = await type_Formation.find();
  res.json(type_formations);
});

module.exports = router;
