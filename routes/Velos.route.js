var express = require('express');
var router = express.Router();
//var Velo = require('../model/Velos');
const VeloController = require("../controllers/velo.controller");
const DIR = "./../../../Desktop/pafront/PIDEV-FrontEnd/src/assets/img/"

const multer = require("multer");
const storage = multer.diskStorage({
destination: (req, file , cb) => {
cb(null, DIR);
},
filename: (req,file,cb)=>{
    const newFileName = Date.now() + "_" + file.originalname;
    cb(null,newFileName );
}

});
const upload = multer({storage});

/*router.route ("/")
      .post(upload.single('image'),veloController.createVelo)
      .get( upload.single('image'),veloController.showAllvelo);
      */
      router.get('/', VeloController.showAllvelo);
      router.get('/VeloTypes', VeloController.showAllveloType);


      router.get('/api/searchVelo/:id', VeloController.searchVelo);
      router.post('/createVelo/:id', upload.single('image'), VeloController.addVelo);
      router.delete('/api/deleteVeloById/:id', VeloController.deleteVeloById);
      router.put('/api/updateVelo/:id', VeloController.updateVelo);
router.get('/ReservationVelo', VeloController.showAllReservation);
router.get('/searchVeloParMarque/:marque', VeloController.searchVeloByMarque);
router.post("/searchPerDate", VeloController.searchReservationPerDate); //X
router.post("/searchPerDateBefore", VeloController.searchByDateBefore); //X
router.post("/searchPerDateAfter", VeloController.searchByDateAllAfter); //X
//router.post('/createParade', ParadeController.createParade);
router.post('/createVeloType', VeloController.createVeloType);
router.post('/createReservationVelo/:id', VeloController.addReservationVelo);
router.delete('/deleteReservationById/:id', VeloController.deleteReservationById);
   

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
