const Association = require('../model/association');
module.exports = {

    showAllass: async(req,res) =>{
        Association.find((err, data)=>{
            res.json(data);

        });
    },
    create: async(req,res) =>{
        console.log("123");
        const association = new Association({ ...req.body});
        // console.log(association);
        await association.save();
        res.json(association);

    },

    deleteAssociationById: async (req, res) => {
        const { id } = req.params;
        await Association.findByIdAndRemove({ _id: id });
        res.send({
            message: "delete successful"
        })

    },
    searchAssociation: async(req,res) => {
        const id = req.params.id;
        Association.findById(id)
            .then(data => {
                if (!data)
                    res.status(404).send({ message: "association introuvable pour id " + id });
                else res.send(data);
            })
            .catch(err => {
                res
                    .status(500)
                    .send({ message: "Erreur recuperation association avec id=" + id });
            });
    },
    addAssociationType: async (req, res) => {

        console.log(">>>>>>>>>");
        console.log(req.body);
        const {id} = req.params;
        console.log(">>>>>>>>>");
        type_association = await type_association.findById(id);
        console.log(">>>>>>>>>" + type_association);
        var a = new Association({
            Description: req.body.Description,
            Nb_participant: req.body.Nb_participant,
            Type: type_association
        });
        console.log("avant");

        a.save();
        res.send({
            message: "Ajout effectué avec succès!"
        });

        console.log(a);
    },





}