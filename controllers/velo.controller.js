const { json } = require("express/lib/response");

const velo = require('../model/Velos');
var Velo = require('../model/Velos');


module.exports = {
  
    showAllvelo: async(req,res) =>{
        Velo.find((err, data)=>{
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