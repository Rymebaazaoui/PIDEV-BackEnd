const parade = require('../model/Parades');
var Parade = require('../model/Parades');
const type_parade = require('../model/Type_parade');
const Inscription_parade = require('../model/Inscription_parade');

module.exports = {
  
    showAllparade: async(req,res) =>{
        Parade.find((err, data)=>{
            res.json(data);
            
        });
    },
    showAllparadeType: async(req,res) =>{
      type_parade.find((err, data)=>{
          res.json(data);
          
      });
  },

  showAllInscription: async(req,res) =>{
    Inscription_parade.find((err, data)=>{
        res.json(data);
        
    });
  },
    searchParade: async(req,res) => {
      const id = req.params.id;
      Parade.findById(id)
        .then(data => {
          if (!data)
            res.status(404).send({ message: "Parade introuvable pour id " + id });
          else res.send(data);
        })
        .catch(err => {
          res
            .status(500)
            .send({ message: "Erreur recuperation parade avec id=" + id });
        });
    },

    searchParadeByLieu: async(req,res) => {
      const Lieu = req.params.Lieu;
      Parade.find(Lieu)
        .then(data => {
          if (!data)
            res.status(404).send({ message: "lieu introuvable pour id " + Lieu });
          else res.send(data);
        })
        .catch(err => {
          res
            .status(500)
            .send({ message: "Erreur recuperation parade avec lieu=" + Lieu });
        });
    },


    addParadeType : async(req,res)=>{

    console.log(">>>>>>>>>");
    console.log(req.body);
    const { id } = req.params;
    console.log(">>>>>>>>>");
    Type_parade =await type_parade.findById(id);
    console.log(">>>>>>>>>"+Type_parade);
    var f= new parade({
    //  dateRecp : req.body.dateRecp
    //dateAjout: {type:Date,default:Date.now},	
    Description: req.body.Description,			
    Nb_inscription: req.body.Nb_inscription,		
    Lieu: req.body.Lieu,
    Type : Type_parade,
  });
  console.log("avant");

  f.save();
  res.send("Ajout effectué avec succes")
  console.log("parade ajouté avec succes ");
  console.log(f);
    },

    addInscriptionParade : async(req,res)=>{

      console.log(">>>>>>>>>");
      console.log(req.body);
      const { id } = req.params;
      console.log(">>>>>>>>>");
      parade_ins = await Parade.findById(id);
      console.log(">>>>>>>>>"+parade_ins);
      var f= new Inscription_parade({
      //  dateRecp : req.body.dateRecp
      //dateAjout: {type:Date,default:Date.now},	
      Nom: req.body.Nom,			
      Prenom: req.body.Prenom,		
      Mail: req.body.Mail,
      Parade : parade_ins,
    });
    console.log("avant");
  
    f.save();
    res.send("Ajout inscription effectué avec succes")
    console.log("Inscrit avec succes ");
    console.log(f);
      },

    createParade: async(req,res) =>{

        const parade = new Parade({ ...req.body});
        await parade.save();
        res.json(parade);
        
    },
    deleteParadeById: async (req, res) => {
      const id = req.params.id;
      Parade.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Impossible de supprimer parade avec id=${id}. parade est possiblement introuvable!`
          });
        } else {
          res.send({
            message: "parade supprimée avec succès!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Impossible de supprimer parade avec id=" + id
        });
      });
      },

      deleteInscriptionById: async (req, res) => {
        const id = req.params.id;
        Inscription_parade.findByIdAndRemove(id)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Impossible de supprimer inscription avec id=${id}. parade est possiblement introuvable!`
            });
          } else {
            res.send({
              message: "inscription supprimée avec succès!"
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Impossible de supprimer inscription avec id=" + id
          });
        });
        },

    updateParade: async (req,res, next) => {

        Parade.findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, (error, data) => {
            if (error) {
              return next(error);
              console.log(error)
            } else {
             // res.json(data)
             res.send({
              message: "Parade was updated successfully!"
            });
            }
          })
        }      
}