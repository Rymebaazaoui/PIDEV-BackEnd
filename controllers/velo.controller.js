const { json } = require("express/lib/response");
const type_velo = require('../model/Type_velo');

const velo = require('../model/Velos');
var Velo = require('../model/Velos');
const Reservation = require('../model/Reservations.model');
const nodemailer = require("nodemailer");



module.exports = {
  
    showAllvelo: async(req,res) =>{
        Velo.find((err, data)=>{
            res.json(data);
            
        });
    },
    showAllveloType: async(req,res) =>{
      type_velo.find((err, data)=>{
          res.json(data);
          
      });
  },
  showAllReservation: async(req,res) =>{
    Reservation.find((err, data)=>{
        res.json(data);
        
    });
  },

    searchVelo: async(req,res) => {
      const id = req.params.id;
      Velo.findById(id)
        .then(data => {
          if (!data)
            res.status(404).send({ message: "Velo introuvable pour id " + id });
          else res.send(data);
        })
        .catch(err => {
          res
            .status(500)
            .send({ message: "Erreur recuperation velo avec id=" + id });
        });
    },
    searchVeloByMarque: async(req,res) => {
      const marque = req.params.marque;
      Velo.find(marque)
        .then(data => {
          if (!data)
            res.status(404).send({ message: "Marque introuvable pour id " + marque });
          else res.send(data);
        })
        .catch(err => {
          res
            .status(500)
            .send({ message: "Erreur recuperation VELO avec marque=" + marque });
        });
    },
    searchReservationPerDate: async (req, res) => {
      const { DateDeb, DateFin } = req.body;
      Reservation.find({
          DateDeb: { $gte: new Date(DateDeb) },
          DateFin: { $lte: new Date(DateFin) },
      })
          .then((resp) => {
              res.send(resp);
          })
          .catch((err) => {
              res.send({ message: err.message });
          });
  },
  searchByDateAllAfter: async (req, res) => {
      const { DateDeb } = req.body;
      await Reservation.find({
          DateDeb: { $gte: new Date(DateDeb) },
      })
          .then((resp) => {
              res.send(resp);
          })
          .catch((err) => {
              res.send({ message: err.message });
          });
  },
  searchByDateBefore: async (req, res) => {
      const { DateFin } = req.body;
      await Reservation.find({ DateF: { $lte: new Date(DateFiin) } })
          .then((resp) => {
              res.send(resp);
          })
          .catch((err) => {
              res.send({ message: err.message });
          });
  },

    addVelo : async(req,res)=>{

      console.log(">>>>>>>>>");
      console.log(req.body);
      const { id } = req.params; 
      console.log(">>>>>>>>>");
      let Type_velo =await type_velo.findById(id);
      console.log(">>>>>>>>>"+Type_velo);
      console.table(req.file)
      // Velo.image=req.file.filename;
      var f= new velo({ 
      //  dateRecp : req.body.dateRecp
      //dateAjout: {type:Date,default:Date.now},	
      marque: req.body.marque,	
      image: `../../assets/img/${req.file.filename}`,			
	    prix: req.body.prix,		
      description: req.body.description,  
      quantite: req.body.quantite,
      Type : Type_velo,
    });
    console.log("avant");
    
  
    f.save();
    res.send("Ajout effectué avec succes")
    console.log("velo ajouté avec succes ");
    console.log(f);
      },
      createVeloType: async(req,res) =>{

        const Type_velo = new type_velo({ ...req.body});
        await Type_velo.save();
        res.json(Type_velo);
        
    },
      addReservationVelo : async(req,res)=>{
  
        console.log(">>>>>>>>>");
        console.log(req.body);
        const { id } = req.params;
        console.log(">>>>>>>>>");
        reser = await Velo.findById(id);
        console.log(">>>>>>>>>"+reser);
        var f= new Reservation({
        //  dateRecp : req.body.dateRecp
        //dateAjout: {type:Date,default:Date.now},	
        Nom: req.body.Nom,			
        Prenom: req.body.Prenom,		
        Mail: req.body.Mail,
        DateDeb: req.body.DateDeb,
        DateFin: req.body.DateFin,

        Velo : reser,
      });
      console.log("avant");
    
      f.save();
      res.send("Reservation effectué avec succes")
      console.log("reservation avec succes ");
      console.log(f);
      let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user : "eya.hadrich@esprit.tn",
            pass : "201SFT3445"
        }
      })
      
      let details = {
        from: "rym.bdioui@gmail.com",
        to: req.body.Mail,
        subject: "confirmation ",
        text: "votre réservation est confirmé, Veuillez rammenez votre velo a la date choisi"
      
      }
      
      mailTransporter.sendMail(details,(err)=>{
        if (err){
          console.log("it has an error",err)
        }
        else {
          console.log("email has sent !")
        }
      })
        },
  
    createVelo: async(req,res) =>{

        const velo = new Velo({ ...req.body});
        console.log(velo)

        /*velo.image = req.file.filename;*/
        console.log("CHECK===",req.file)

        await velo.save();
        res.json(velo);
        
    },
    deleteVeloById: async (req, res) => {
      const id = req.params.id;
      Velo.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Impossible de supprimer velo avec id=${id}. velo est possiblement introuvable!`
          });
        } else {
          res.send({
            message: "velo supprimée avec succès!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Impossible de supprimer velo avec id=" + id
        });
      });
      },
      deleteReservationById: async (req, res) => {
        const id = req.params.id;
        Reservation.findByIdAndRemove(id)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Impossible de supprimer la reservation avec id=${id}. velo est possiblement introuvable!`
            });
          } else {
            res.send({
              message: "reservation supprimée avec succès!"
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Impossible de supprimer la reservation avec id=" + id
          });
        });
        },
    updateVelo: async (req,res, next) => {
        const {id} = req.params
         try{
        const veloUpdated = await Velo.findByIdAndUpdate(id,{$set:{...req.body}})
        console.log(veloUpdated)
        console.log(veloUpdated)
        return res.status(200).send({
            message: "velo was updated successfully!"
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