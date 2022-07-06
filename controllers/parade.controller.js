const parade = require('../model/Parades');
var Parade = require('../model/Parades');


module.exports = {
  
    showAllparade: async(req,res) =>{
        Parade.find((err, data)=>{
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
    updateParade: async (req,res, next) => {

        Parade.findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, (error, data) => {
            if (error) {
              return next(error);
              console.log(error)
            } else {
                res.send({
                    message: "parade was updated successfully!"
                  });
            }
          })
        }
}