var express = require('express');
var router = express.Router();
//var Velo = require('../model/Velos');
const VeloController = require("../controllers/velo.controller");


const multer = require("multer");
const veloController = require('../controllers/velo.controller');
const storage = multer.diskStorage({
destination: (req, file , cb) => {
cb(null, "./uploads");
},
filename: (req,file,cb)=>{
    const newFileName = Date.now() + "_" + file.originalname;
    cb(null,newFileName );
}

});
const upload = multer({storage});

router.route ("/")
      .post(upload.single('image'),veloController.createVelo)
      .get( upload.single('image'),veloController.showAllvelo);

      router.get('/searchVelo/:id', VeloController.searchVelo);
      router.post('/createVelo', VeloController.createVelo);
      router.delete('/deleteVeloById/:id', VeloController.deleteVeloById);
      router.put('/updateVelo/:id', VeloController.updateVelo);
      
   

/* GET users listing. */

/*router.get('/', function(req, res, next) {
    Velo.find((err, data)=>{
        res.json(data);
        
    })
});
   router.post('/add', function(req,res){
    console.log(req.body);

   });
*/



module.exports = router;
