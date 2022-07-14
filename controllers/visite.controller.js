const { findByIdAndRemove } = require('../model/Visites');
const Visite = require('../model/Visites');

module.exports = {

    showAllvisite: async (req, res) => {
        Visite.find((err, data) => {
            res.json(data);

        });
    },
    create: async (req, res) => {

        const visite = new Visite({...req.body});
        await visite.save();
        res.json(visite);

    },
    deleteVisiteById: async (req, res) => {
        const id = req.params.id;
        Visite.findByIdAndRemove(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: `Impossible de supprimer visite avec id=${id}. Visite  est possiblement introuvable!`
                    });
                } else {
                    res.send({
                        message: "visite supprimée avec succès!"
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Impossible de supprimer visite avec id=" + id
                });
            });
    },
    updateVisite: async(req,res) => {
        const id  = req.params.id;
        console.log(id)
        Visite.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: `Impossible de mettre à jour visite avec id=${id}!`
                    });
                } else res.send({ message: "visite mise à jour avec succès." });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Erreur mise à jour avec id=" + id
                });
            });
    },
    searchVisite: async(req,res) => {
        const id = req.params.id;
        Visite.findById(id)
            .then(data => {
                if (!data)
                    res.status(404).send({ message: "visite introuvable pour id " + id });
                else res.send(data);
            })
            .catch(err => {
                res
                    .status(500)
                    .send({ message: "Erreur recuperation visite avec id=" + id });
            });


    },
    addVisiteLieu : async(req,res)=>{

        console.log(">>>>>>>>>");
        console.log(req.body);
        const { id } = req.params;
        console.log(">>>>>>>>>");
       Lieu=await Lieu.findById(id);
        console.log(">>>>>>>>>"+Lieu);
        var L= new Lieu({
            Description : req.body.Description,
            DateD: req.body.DateFin,
            DateF: req.body.DateF,
            Nom : Lieu
        });
        console.log("avant");

        L.save();
        res.send({
            message: "Ajout effectué avec succès!"
        });
        console.log(L);
    },
}
