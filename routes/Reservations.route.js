var express = require('express');
var router = express.Router();
const ReservationController = require("../controllers/reservation.controller");

var Reservation = require('../model/Reservations.model');

const reservationController = require('../controllers/reservation.controller');

     /* router.get('/', ReservationController.showAllreservation);


      router.get('/searchReservation/:id', ReservationController.searchReservation);
      router.post('/createReservation', ReservationController.createReservation);
      router.delete('/deleteReservationById/:id', ReservationController.deleteReservationById);
      router.put('/updateReservation/:id', ReservationController.updateReservation);
      */
      

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

/*router.route("/")
.post(reservationController.verifyVeloIdenty, reservationController.createReservation)
.get(reservationController.verifyVeloIdenty, reservationController.getVeloRelatedReservation);


router.get("/all", reservationController.getAllReservations)
router.get("/:id",  reservationController.getReservationById)
router.get("/delete/:id", reservationController.deleteReservationById)
*/
router.post('/', async(req, res) => {
    const reservation = new Reservation({...req.body});
    await reservation.save();
          res.json(reservation);
    //res.send('respond with a resource');
  });
  router.get('/', async(req, res) => {
    //res.send('respond with a resource');
    const reservation = await Reservation.find();
    res.json(reservation);
  });
  
module.exports = router;
