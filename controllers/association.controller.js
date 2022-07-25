const Association = require('../model/association');
const TypeAssociation = require('../model/type_association')
const inscription_Association = require('../model/inscription_association')

module.exports = {

    showType: async (req, res) => {
        console.log('88')
        TypeAssociation.find({}, (err, result) => {
            res.json(result)
        })
    },
    createType: async (req, res) => {
        const type_ass = await new TypeAssociation(req.body);
        type_ass.save()
        res.send({
            message: "Ajout effectué avec succès!"
        });
        console.log(type_ass)

    },


    showAllass: async (req, res) => {
        Association.find((err, data) => {
            res.json(data);

        });
    },
    create: async (req, res) => {
        console.log("123");
        const association = new Association({...req.body});
        // console.log(association);
        await association.save();
        res.json(association);

    },

    deleteAssociationById: async (req, res) => {
        const {id} = req.params;
        await Association.findByIdAndRemove({_id: id});
        res.send({
            message: "delete successful"
        })

    },
    searchAssociation: async (req, res) => {
        const id = req.params.id;
        Association.findById(id)
            .then(data => {
                if (!data)
                    res.status(404).send({message: "association introuvable pour id " + id});
                else res.send(data);
            })
            .catch(err => {
                res
                    .status(500)
                    .send({message: "Erreur recuperation association avec id=" + id});
            });
    },
    addAssociationType: async (req, res) => {
        const id = req.params.id;
        const type_association = await TypeAssociation.findById(id);
        var a = new Association({
            Description: req.body.Description,
            Nb_participant: req.body.Nb_participant,
            Type: type_association
        });

        a.save();
        res.send({
            message: "Ajout effectué avec succès!"
        });

        console.log(a);
    },
    updateAssociation: async (req, res, next) => {
        Association.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.send({
                    message: "association was updated successfully!"
                });
            }
        })
    },
    addInscriptionAssociation: async (req, res) => {
        console.log('aaaaaaaa', req.body)

        var asso = new inscription_Association({
            Nom: req.body.Nom,
            Prenom: req.body.Prenom,
            Mail: req.body.Mail,
            Association: req.body.Association,
        });
        asso.save();
        console.log(asso)
        res.send(asso)
    },
    showIns: async (req, res) => {
        inscription_Association.find({}, (err, result) => {
            res.json(result)
        })
    },
    deleteInscriptionById: async (req, res) => {
        const id = req.params.id;
        inscription_Association.findByIdAndRemove(id)
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
    }
}