const { findByIdAndRemove } = require('../model/formations.model');
let  formations = require('../model/formations.model')


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

    updateFormation: async(req,res) => {
        const { id } = req.params.id;
        console.log(id)
        formations.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Impossible de mettre à jour formation avec id=${id}!`
        });
      } else res.send({ message: "Formation mise à jour avec succès." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur mise à jour avec id=" + id
      });
    });
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
      }


 /* deleteFormationById: async (req, res) => {
        const { id } = req.params;
        console.log(id);
        await formations.findByIdAndRemove({ _id: id });
        res.send({
            message: "formation was deleted successfully!"
          });
          res.redirect('/api/formation');

    },*/ 
    
}