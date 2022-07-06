/* const reservation = require('../model/Reservations.model');
var Reservation = require('../model/Reservations.model');


module.exports = {
  
    showAllreservation: async(req,res) =>{
        Reservation.find((err, data)=>{
            res.json(data);
            
        });
    },
    searchReservation: async(req,res) => {
      const id = req.params.id;
      Reservation.findById(id)
        .then(data => {
          if (!data) 
            res.status(404).send({ message: "reservation introuvable pour id " + id });
          else res.send(data);
        })
        .catch(err => {
          res
            .status(500)
            .send({ message: "Erreur recuperation reservation avec id=" + id });
        });
    },

    createReservation: async(req,res) =>{

        const reservation = new Reservation({ ...req.body});
        console.log(reservation)
        await reservation.save();
        res.json(reservation);
        
    },
    deleteReservationById: async (req, res) => {
      const id = req.params.id;
      Reservation.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Impossible de supprimer reservation avec id=${id}. reservation est possiblement introuvable!`
          });
        } else {
          res.send({
            message: "reservation supprimée avec succès!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Impossible de supprimer reservation avec id=" + id
        });
      });
      },
    updateReservation: async (req,res, next) => {
        const {id} = req.params
         try{
        const reservationUpdated = await Velo.findByIdAndUpdate(id,{$set:{...req.body}})
        console.log(reservationUpdated)
        console.log(reservationUpdated)
        return res.status(200).send({
            message: "reservation was updated successfully!"
          })
        }catch(error){
            return res.status(500).send({err:error})
        }
        // await Velo.findByIdAndUpdate(req.params.id, {
        //     $set: req.body
        //   }, (error, data) => {
        //     if (error) {
        //         console.log(error)
        //       return next(error);
        //     } else {
        //         res.send({
        //             message: "velo was updated successfully!"
        //           });
        //     }
        //   })
        }
}


*/
/*const { json } = require("express/lib/response");
const { Reservation } = require("../model/Reservations.model");
const { Velo } = require("../model/Velos");


module.exports = {
    createReservation: async (req,res) =>{
        const velo = req.Velo;
        const reservation = new Reservation({...req.body});
        Reservation.velo = Velo;
        await reservation.save();
        res.json(reservation);
       

    },
    verifyVeloIdenty : async (req,res,next) =>{
       console.log(req.headers);
        const { id } = req.headers;
        if (!id){
            return res.status(401).json();
        }
        const velo = await Velo.findById(id);
        if(!velo){
            return res.status(404).json();
        }
        req.velo = Velo;
        next();

    },
    getVeloRelatedReservation: async(req,res) =>{
        const {velo} = req;
        const reservations = await Product.find({velo: Velo});
        res.json(reservations);
    },
    getAllReservations: async(req,res) =>{
        const reservations = await Product.find();
        res.render('list', { reservation });
    },
    getReservationById: async(req,res) =>{
        
        const { id }= req.params ;
        const reservation = await Reservation.findById(id);
        res.render('show', { reservation });
    },
    deleteReservationById: async(req,res) =>{
        const { id }  = req.params;
        await Reservation.remove({_id: id});
        res.redirect("/reservation/all");
    },
} */