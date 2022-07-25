const { findByIdAndRemove } = require('../model/formations.model');
const Formation = require('../model/formations.model');
let  formations = require('../model/formations.model')
var type_Formation= require('../model/type_formation');

module.exports = {
  
    showAllformations: async(req,res) =>{
        formations.find((err, data)=>{
            res.json(data);
            
        });
    },
    create: async(req,res) =>{
        // console.log(req.body.NombreDePersonnes);
        const format = new formations({...req.body});
        console.log(format);  
        format.save();
        res.json(format);
        
    },
    deleteFormationById: async (req, res) => {
    const id = req.params.id;
    formations.findByIdAndRemove(id)
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

        formations.findByIdAndUpdate(req.params.id, {
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
        formations.findById(id)
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
    type_Formation=await type_Formation.findById(id);
    console.log(">>>>>>>>>"+type_Formation);
    var f= new Formation({
    DateDebut : req.body.DateDebut,
    DateFin: req.body.DateFin,	
    Description: req.body.Description,			
    TitreDeFormation: req.body.TitreDeFormation,		
    Type : type_Formation
  });
  console.log("avant");

  f.save();
  res.send({
    message: "Ajout effectué avec succès!"
  });
//  console.log("formation ajoutée avec succès ");
  console.log(f);
    },
/*
router.put('/update/:id', async function(req,res){
  try{
    await EspeceAnimale.findByIdAndUpdate({_id:req.params.id},{
      description: req.body.description,		
      isChassable: req.body.isChassable,		
      maniereProt: req.body.maniereProt,		
      methodeChasse: req.body.methodeChasse,		
      image: req.body.image,		
      lieu: req.body.lieu,		
      periodeReprod: req.body.periodeReprod,	
      isActive: req.body.isActive
    })
    res.send("mise à jours effectuée avec succès")
  }
  catch{
    res.send(err);
  }
})
*/
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