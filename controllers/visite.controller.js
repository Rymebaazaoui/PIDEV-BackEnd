const lieu = require("../model/lieu");
const { findByIdAndRemove } = require("../model/Visites");
const Visite = require("../model/Visites");

module.exports = {
    showAllvisite: async (req, res) => {
        Visite.find((err, data) => {
            res.json(data);
        });
    },
    create: async (req, res) => {
        //JOIN
        const Lieu = await lieu.findOne({ nom: req.body.nom }).populate("nom");

        console.log(Lieu);
        const visite = new Visite({
            Description: req.body.Description,
            DateD: req.body.DateD,
            DateF: req.body.DateF,
            nom: Lieu._id,
        });

        visite
            .save()
            .then((resp) => {
                res.json(visite);
            })
            .catch((err) => {
                res.send(err.message);
            });
    },

    createLieu: async (req, res) => {
        const Lieu = new lieu({ ...req.body });
        Lieu.save()
            .then((resp) => {
                res.json(Lieu);
            })
            .catch((err) => {
                res.send(err.message);
            });
    },

    getLieuById: async (req, res) => {
        lieu
            .findById(req.body.nom)
            .then((data) => {
                if (!data)
                    res.status(404).send({ message: "lieu introuvable pour id " + id });
                else res.send(data);
            })
            .catch((err) => {
                res
                    .status(500)
                    .send({ message: "Erreur recuperation lieu avec id=" + id });
            });
    },

    showAllLieu: async (req, res) => {
        lieu.find((err, data) => {
            res.json(data);
        });
    },
    deleteVisiteById: async (req, res) => {
        const id = req.params.id;
        Visite.findByIdAndRemove(id)
            .then((data) => {
                if (!data) {
                    res.status(404).send({
                        message: `Impossible de supprimer visite avec id=${id}. Visite  est possiblement introuvable!`,
                    });
                } else {
                    res.send({
                        message: "visite supprimée avec succès!",
                    });
                }
            })
            .catch((err) => {
                res.status(500).send({
                    message: "Impossible de supprimer visite avec id=" + id,
                });
            });
    },
    updateVisite: async (req, res) => {
        const id = req.params.id;
        console.log(id);
        Visite.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            .then((data) => {
                console.log(data);
                if (!data) {
                    res.status(404).send({
                        message: `Impossible de mettre à jour visite avec id=${id}!`,
                    });
                } else res.send({ message: "visite mise à jour avec succès." });
            })
            .catch((err) => {
                res.status(500).send({
                    message: "Erreur mise à jour avec id=" + err,
                });
            });
    },
    getSpecificVisite: async (req, res) => {
        const id = req.params.id;
        Visite.findById(id)
            .then((data) => {
                if (!data)
                    res.status(404).send({ message: "visite introuvable pour id " + id });
                else res.send(data);
            })
            .catch((err) => {
                res
                    .status(500)
                    .send({ message: "Erreur recuperation visite avec id=" + id });
            });
    },
    addVisiteLieu: async (req, res) => {
        const { Description, DateD, DateF } = req.body;
        const { id } = req.params;
        Lieu = await Lieu.findById(id);
        let L = new Lieu({
            Description,
            DateD,
            DateF,
            Nom: Lieu,
        });
        L.save();
        res.send({
            message: "Ajout effectué avec succès!",
        });
    },
    searchVisitePerDate: async (req, res) => {
        const { DateD, DateF } = req.body;
        Visite.find({
            DateD: { $gte: new Date(DateD) },
            DateF: { $lte: new Date(DateF) },
        })
            .then((resp) => {
                res.send(resp);
            })
            .catch((err) => {
                res.send({ message: err.message });
            });
    },
    searchByDateAllAfter: async (req, res) => {
        const { DateD } = req.body;
        await Visite.find({
            DateD: { $gte: new Date(DateD) },
        })
            .then((resp) => {
                res.send(resp);
            })
            .catch((err) => {
                res.send({ message: err.message });
            });
    },
    searchByDateBefore: async (req, res) => {
        const { DateF } = req.body;
        await Visite.find({ DateF: { $lte: new Date(DateF) } })
            .then((resp) => {
                res.send(resp);
            })
            .catch((err) => {
                res.send({ message: err.message });
            });
    },
};
