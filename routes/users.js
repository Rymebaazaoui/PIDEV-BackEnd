var express = require('express');
var router = express.Router();

var Type_parade = require('../model/Type_parade');


/* GET users listing. */
router.post('/', async(req, res) => {
  const type_parade = new Type_parade({...req.body});
  await type_parade.save();
        res.json(type_parade);
  //res.send('respond with a resource');
});

router.get('/', async(req, res) => {
  //res.send('respond with a resource');
  const type_parades = await Type_parade.find();
  res.json(type_parades);
});

module.exports = router;
