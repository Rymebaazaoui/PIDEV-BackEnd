var Visite = require('../model/Visites');

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
    deletevisiteById: async (req, res) => {
        const { id } = req.params;
        await Visite.findByIdAndRemove({ _id: id });

    },
    updatevisiteById:async (req, res)=>{
        const { id } = req.params;
        await  Visite.findOneAndUpdate( { _id: id ,...req.body });
    },


}