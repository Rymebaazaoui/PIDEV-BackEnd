// const { findByIdAndRemove } = require('../model/formations.model');
var Formation = require('../model/formations.model');
//let  formations = require('../model/formations.model');
const Type_Formation= require('../model/type_formation');
const Inscription_formation= require('../model/inscription_formation');
const nodemailer =require("nodemailer");

module.exports = {
  
    showAllformations: async(req,res) =>{
        Formation.find((err, data)=>{
            res.json(data);
            
        });
    },
    showAllFormationsType: async(req,res) =>{
      Type_Formation.find((err, data)=>{
          res.json(data);
          
      });
  },
  showAllFormationInscriptions: async(req,res) =>{
    Inscription_formation.find((err, data)=>{
        res.json(data);
        
    });
  },
    create: async(req,res) =>{
        // console.log(req.body.NombreDePersonnes);
        const formation = new Formation({...req.body});
        console.table(formation);  
        formation.save();
        console.table(formation);  
        res.json(formation);        
    },

    addInscriptionFormation : async(req,res)=>{

      console.log(">>>>>>>>>");
      console.log(req.body);
      const { id } = req.params;
      console.log(">>>>>>>>>");
      new_inscription = await Formation.findById(id);
      console.log(">>>>>>>>>"+new_inscription);
      var f= new Inscription_formation({
      Nom: req.body.nom,			
      Prenom: req.body.prenom,		
      Mail: req.body.mail,
      Formation : new_inscription,
    });
    console.log('test',f);
  
    f.save();
    res.send("Ajout inscription effectué avec succes")
    console.log("Inscrit avec succes ");
    console.log(f);
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
          user : "eya.hadrich@esprit.tn",
          pass : "201SFT3445"
      }
    })
    
    let details = {
      from: "rym.baazaoui@esprit.tn",
      to: req.body.mail,
      subject: "confirmation inscription formation",
      text: "votre inscription " +new_inscription.TitreDeFormation+ "est confirmé pour le : " +new_inscription.DateDebut+"\n"
    
    }
    
    mailTransporter.sendMail(details,(err)=>{
      if (err){
        console.log("it has an error",err)
      }
      else {
        console.log("email was sent !")
      }
    })
      },

    deleteFormationById: async (req, res) => {
    const id = req.params.id;
    Formation.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Impossible de supprimer formation avec id=${id}. Formation est possiblement introuvable!`
        });
      } else {
        res.send({
          message: "formation supprimée avec succès!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Impossible de supprimer formation avec id=" + id
      });
    });
    },

     updateFormation: async (req,res, next) => {

      Formation.findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, (error, data) => {
            if (error) {
              return next(error);
              console.log(error)
            } else {
          console.log(res.body);
          res.send({
            message: "Formation mise à jour avec succès.!"
          });
          //console.log('Formation mise à jour avec succès.!')
            }
          })
        },
    
    searchFormation: async(req,res) => {
        const id = req.params.id;
        Formation.findById(id)
          .then(data => {
            if (!data)
              res.status(404).send({ message: "formation introuvable pour id " + id });
            else res.send(data);
          })
          .catch(err => {
            res
              .status(500)
              .send({ message: "Erreur recuperation formation avec id=" + id });
          });
      },
 
    findFormationsByDateAfter: (req,res)=>{
      const {DateDebut}=req.body;
       Formation.find({
        DateDebut:{$gte: new Date(DateDebut)}
      }).then(resp=>{
          res.send(resp)
      }).catch(err=>{
          res.send({message:err.message})
      })
  },
  findFormationsByDateBefore: (req,res)=>{
      const {DateFin}=req.body;
       Formation.find({DateFin:{$lte: new Date(DateFin)}})
      .then(resp=>{
          res.send(resp)
      }).catch(err=>{
          res.send({message:err.message})
      })
  },
  findFormationsByTitle: (req,res)=>{
    const {TitreDeFormation}=req.body;
    console.log(req.body);
     Formation.find({titreDeFormation: new String(TitreDeFormation)})
    .then(resp=>{
        res.send(resp)
    }).catch(err=>{
        res.send({message:err.message})
    })
},
searchFormationPerDate: async (req, res) => {
  const { DateDebut, DateFin } = req.body;
  Formation.find({
      DateD: { $gte: new Date(DateDebut) },
      DateF: { $lte: new Date(DateFin) },
  })
      .then((resp) => {
          res.send(resp);
      })
      .catch((err) => {
          res.send({ message: err.message });
      });
},
    


 /* deleteFormationById: async (req, res) => {
        const { id } = req.params;
        console.log(id);
        await formations.findByIdAndRemove({ _id: id });
        res.send({
            message: "formation was deleted successfully!"
          });
          res.redirect('/api/formation');

    },*/
    
    addFormationType : async(req,res)=>{

      console.log(">>>>>>>>>");
    console.log(req.body);
    const { id } = req.params;
    console.log(">>>>>>>>>");
    type_Formation=await Type_Formation.findById(id);
    console.log(">>>>>>>>>"+type_Formation);
    var f= new Formation({
    DateDebut : req.body.DateDebut,
    DateFin: req.body.DateFin,	
    Description: req.body.Description,			
    TitreDeFormation: req.body.TitreDeFormation,	
    NombreDeParticiants: req.body.NombreDeParticiants,
    NomFormateur: req.body.NomFormateur,			
    Type : type_Formation,
  });
  console.log("avant");

  f.save();
  res.send({
    message: "Ajout effectué avec succès!"
  });
//  console.log("formation ajoutée avec succès ");
  console.log(f);
    },

// updateFormationtype: async (req,res, next) => {

//   formations.findByIdAndUpdate(req.params.id, {
//       $set: req.body
//     }, (error, data) => {
//       if (error) {
//         return next(error);
//         console.log(error)
//       } else {
//     console.log(res.body);
//     res.send({
//       message: "Formation mise à jour avec succès.!"
//     });
//     //console.log('Formation mise à jour avec succès.!')
//       }
//     })
//   }
    
}

